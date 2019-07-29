import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/starter', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
      },
      {
        path: 'agent',
        loadChildren: './agent/agent.module#AgentModule'
      },
      {
        path: 'brokers',
        loadChildren: './brokers/brokers.module#BrokersModule'
      },
      {
        path: 'offices',
        loadChildren: './offices/offices.module#OfficesModule'
      },
      {
        path: 'mandate',
        loadChildren: './mandate/mandate.module#MandateModule'
      },
      {
        path: 'listings',
        loadChildren: './listings/listings.module#ListingsModule'
      },
      {
        path: 'stock',
        loadChildren: './stock/stock.module#StockModule'
      },
      {
        path: 'tools',
        loadChildren: './tools/tools.module#ToolsModule'
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'lead',
        loadChildren: './lead/lead.module#LeadModule'
      },
      {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
      },
      {
        path: 'brand-marketing',
        loadChildren: './brand-marketing/brand-marketing.module#BrandMarketingModule'
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

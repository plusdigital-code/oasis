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
        path: 'commercial',
        loadChildren: './commercial/commercial.module#CommercialModule'
      },
      {
        path: 'collateral',
        loadChildren: './collateral/collateral.module#CollateralModule'
      },
      {
        path: 'announcements',
        loadChildren: './announcements/announcements.module#AnnouncementsModule'
      },
      {
        path: 'stock',
        loadChildren: './stock/stock.module#StockModule'
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
        path: 'companies',
        loadChildren: './companies/companies.module#CompaniesModule'
      },
      {
        path: 'brand',
        loadChildren: './brand/brand.module#BrandModule'
      },
      {
        path: 'support',
        loadChildren: './support/support.module#SupportModule'
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

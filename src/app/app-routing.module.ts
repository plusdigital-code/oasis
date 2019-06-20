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
        path: 'mandates',
        loadChildren: './mandates/mandates.module#MandatesModule'
      },
      {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
      },
      {
        path: 'leads',
        loadChildren: './leads/leads.module#LeadsModule'
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
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

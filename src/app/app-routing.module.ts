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
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

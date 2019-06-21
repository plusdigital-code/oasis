import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource/resource.component';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceService,
  FormioResourceCreateComponent,
  FormioResourceViewComponent,
  FormioResourceEditComponent,
  FormioResourceDeleteComponent
} from 'angular-formio/resource';
import { IndexComponent } from './index/index.component';
import { FormioGrid } from 'angular-formio/grid';
import { ViewComponent } from './view/view.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioGrid,
    AgmCoreModule,
    FormioResource,
    RouterModule.forChild([
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'new',
        component: FormioResourceCreateComponent
      },
      {
        path: ':id',
        component: ResourceComponent,
        children: [
          {
            path: '',
            redirectTo: 'view',
            pathMatch: 'full'
          },
          {
            path: 'view',
            component: ViewComponent
          },
          {
            path: 'edit',
            component: FormioResourceEditComponent
          },
          {
            path: 'delete',
            component: FormioResourceDeleteComponent
          },
          {
            path: 'showings',
            loadChildren: './showings/showings.module#ShowingsModule'
          },
          {
            path: 'documents',
            loadChildren: './documents/documents.module#DocumentsModule'
          },
          {
            path: 'mandate-leads',
            loadChildren: './mandate-leads/mandate-leads.module#MandateLeadsModule'
          },
          {
            path: 'mandate-listing',
            loadChildren: './mandate-listing/mandate-listing.module#MandateListingModule'
          }
        ]
      },
    ])
  ],
  declarations: [ResourceComponent, IndexComponent, ViewComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'mandates',
        form: 'mandates'
      }
    }
  ]
})
export class MandatesModule { }

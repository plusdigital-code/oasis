import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceService,
  FormioResourceCreateComponent,
  FormioResourceViewComponent,
  FormioResourceIndexComponent,
  FormioResourceEditComponent,
  FormioResourceDeleteComponent
} from 'angular-formio/resource';
import { FormioGrid } from 'angular-formio/grid';
import { ResourceComponent } from './resource/resource.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioGrid,
    FormioResource,
      RouterModule.forChild([
        {
          path: '',
          component: FormioResourceIndexComponent
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
              path: 'web',
              loadChildren: './web/web.module#WebModule'
            },
            {
              path: 'p24',
              loadChildren: './p24/p24.module#P24Module'
            },
            {
              path: 'pp',
              loadChildren: './pp/pp.module#PpModule'
            },
            {
              path: 'listing-brochure',
              loadChildren: './listing-brochure/listing-brochure.module#ListingBrochuresModule'
            },
            {
              path: 'office-stock',
              loadChildren: './office-stock/office-stock.module#OfficeStockModule'
            }
          ]
        },
      ])
    ],
  declarations: [ResourceComponent, ViewComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'mandate-tools',
        form: 'mandate-tools',
        parents: [
          'mandates'
        ]
      }
    }
  ]
})
export class MandateToolsModule { }

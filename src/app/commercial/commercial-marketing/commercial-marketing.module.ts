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
              component: FormioResourceViewComponent
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
              path: 'commercial-web',
              loadChildren: './commercial-web/commercial-web.module#CommercialWebModule'
            },
            {
              path: 'commercial-property24',
              loadChildren: './commercial-property24/commercial-property24.module#CommercialProperty24Module'
            },
            {
              path: 'commercial-private-property',
              loadChildren: './commercial-private-property/commercial-private-property.module#CommercialPrivatePropertyModule'
            },
            {
              path: 'commercial-brochures',
              loadChildren: './commercial-brochures/commercial-brochures.module#CommercialBrochuresModule'
            }
          ]
        },
      ])
    ],
  declarations: [ResourceComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'commercialMarketing',
        form: 'commercialmarketing',
        parents: [
          'commercial'
        ]
      }
    }
  ]
})
export class CommercialMarketingModule { }

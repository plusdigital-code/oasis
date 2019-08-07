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
          name: 'commercialListingProfile',
          form: 'commerciallistingprofile'
      }
  }
]
})
export class CommercialListingModule { }

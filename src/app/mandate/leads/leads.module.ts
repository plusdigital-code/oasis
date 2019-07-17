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
import { ViewComponent } from './view/view.component';
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
                  component: ViewComponent
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
  declarations: [ViewComponent, ResourceComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'leads',
        form: 'leads',
        parents: [
          'mandate'
        ]
      }
    }
  ]
})
export class LeadsModule { }

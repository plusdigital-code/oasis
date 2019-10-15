import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
    FormioResource,
    FormioResourceConfig,
    FormioResourceService,
    FormioResourceViewComponent,
    FormioResourceEditComponent,
    FormioResourceDeleteComponent,
    FormioResourceCreateComponent
} from 'angular-formio/resource';
import { FormioGrid } from 'angular-formio/grid';
import { ResourceComponent } from './resource/resource.component';
import { IndexComponent } from './index/index.component';
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
                  component: FormioResourceViewComponent,
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
  declarations: [ResourceComponent, IndexComponent, ViewComponent],
providers: [
  FormioResourceService,
  {
      provide: FormioResourceConfig,
      useValue: {
          name: 'support',
          form: 'support'
      }
  }
]
})
export class SupportModule { }
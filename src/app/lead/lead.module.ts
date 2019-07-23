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
    FormioResourceDeleteComponent,
    FormioResourceIndexComponent,
    FormioResourceEditComponent
} from 'angular-formio/resource';
import { FormioGrid } from 'angular-formio/grid';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
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
                      component: ViewComponent,
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
  declarations: [ResourceComponent, ViewComponent, IndexComponent],
  providers: [
      FormioResourceService,
      {
          provide: FormioResourceConfig,
          useValue: {
              name: 'leads',
              form: 'leads'
          }
      }
  ]
})
export class LeadModule { }

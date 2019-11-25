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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgAisModule } from 'angular-instantsearch';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormioModule,
    NgAisModule,
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
  declarations: [ResourceComponent, IndexComponent, ViewComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'stock',
        form: 'stock'
      }
    }
  ]
})
export class StockModule { }

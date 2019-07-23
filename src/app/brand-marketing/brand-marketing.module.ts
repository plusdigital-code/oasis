import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
    FormioResource,
    FormioResourceConfig,
    FormioResourceService,
    FormioResourceIndexComponent
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
            component: IndexComponent,
            data: {
              title: 'Brokers',
              urls: [
                { title: 'Home', url: '/home/maxprop' },
                { title: 'Brokers' }
              ]
            }
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
                    data: {
                      title: 'Maxprop Brokers',
                      urls: [
                        { title: 'Maxprop Brokers', url: '/broker' },
                        { title: 'Broker Profile' }
                      ]
                    }
                },
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
          name: 'brandmarketing',
          form: 'brandMarketing'
      }
  }
]
})
export class BrandMarketingModule { }

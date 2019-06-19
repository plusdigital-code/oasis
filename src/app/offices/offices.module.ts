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
import { OfficeSearchComponent } from './office-components/office-search/office-search.component';

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
                    title: 'Offices',
                    urls: [
                      { title: 'Home', url: '/home/maxprop' },
                      { title: 'Offices' }
                    ]
                  }
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
                  },
                  {
                    path: 'office-agents',
                    loadChildren: './office-agents/office-agents.module#OfficeAgentsModule'
                  },
                  {
                    path: 'office-listings',
                    loadChildren: './office-listings/office-listings.module#OfficeListingsModule'
                  }
        ]
    },
        ])
    ],
    declarations: [ResourceComponent, ViewComponent, IndexComponent, OfficeSearchComponent],
    providers: [
        FormioResourceService,
        {
            provide: FormioResourceConfig,
            useValue: {
                name: 'offices',
                form: 'offices'
            }
        }
    ]
})
export class OfficesModule { }

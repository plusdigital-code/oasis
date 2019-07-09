import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource/resource.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResourceComponent, ViewComponent]
})
export class P24Module { }

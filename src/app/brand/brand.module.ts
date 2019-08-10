import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SocialMediaPolicyComponent } from './social-media-policy/social-media-policy.component';
import { FormioModule } from 'angular-formio';
import { BrandRoutes } from './brand-routing.routing';
import { IdentityComponent } from './identity/identity.component';


@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    RouterModule.forChild(BrandRoutes),
  ],
  declarations: [SocialMediaPolicyComponent, IdentityComponent]
})
export class BrandModule { }

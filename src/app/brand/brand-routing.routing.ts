import { Routes } from '@angular/router';
import { SocialMediaPolicyComponent } from './social-media-policy/social-media-policy.component';
import { IdentityComponent } from './identity/identity.component';


export const BrandRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'social-media-policy',
        component: SocialMediaPolicyComponent,
      },
      {
        path: 'identity',
        component: IdentityComponent,
      }
    ]
  }
];

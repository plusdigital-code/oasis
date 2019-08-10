import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaPolicyComponent } from './social-media-policy.component';

describe('SocialMediaPolicyComponent', () => {
  let component: SocialMediaPolicyComponent;
  let fixture: ComponentFixture<SocialMediaPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

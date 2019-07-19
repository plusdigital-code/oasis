import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentFeedComponent } from './agent-feed.component';

describe('AgentFeedComponent', () => {
  let component: AgentFeedComponent;
  let fixture: ComponentFixture<AgentFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

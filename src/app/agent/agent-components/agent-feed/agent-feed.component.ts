import { Component, OnInit } from '@angular/core';
import { Formio } from 'formiojs';
import { ActivatedRoute, RouterState } from '@angular/router';

import { FormioAuthService } from 'angular-formio/auth';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-agent-feed',
  templateUrl: './agent-feed.component.html',
  styleUrls: ['./agent-feed.component.css']
})
export class AgentFeedComponent implements OnInit {
  public blah: JsonPipe;
public url: any;
public url2: any;
public url3: any;

constructor(private activatedRoute: ActivatedRoute, public auth: FormioAuthService) {
    console.log(this.activatedRoute);
  }

ngOnInit() {
this.url = '{\'data\':{\'listingId\':' + this.activatedRoute.snapshot.parent.url + '}}';
this.url2 = this.activatedRoute.snapshot.parent.url['0'].path;
const submission = {
  data: {
    listingId: this.url2
  }
};
this.url3 = submission;

}
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioAuthService } from 'angular-formio/auth';
import { Formio } from 'formiojs';
import { JsonPipe } from '@angular/common';
import { FormioUtils } from 'angular-formio';

@Component({
  selector: 'app-agent-feed',
  templateUrl: './agent-feed.component.html',
  styleUrls: ['./agent-feed.component.css']
})
export class AgentFeedComponent implements OnInit {

  public blah: any;
  public url: any;
  constructor(private activatedRoute: ActivatedRoute, public auth: FormioAuthService) {
    console.log(this.activatedRoute);
  }

  ngOnInit() {
    const pipeline = [];
pipeline.push({
        '$match': {
        'form': {
            '$in':
             ['5ced53e15ea4466b5cc77cce']
        },
            'data.offices._id': '5ced24a3aedcd715b26baff1'
        }
    },
    {
        '$group': {
            '_id': '$data.offices._id',
            'total value': {
                '$sum': '$data.price'
            },
            'total': {
                '$avg': '$data.price'
            }
    }

}
 );

 Formio.request('https://digitaloffice.form.io/report', 'POST', pipeline).then(function(result: any) {
  console.log(result);
});
this.blah = pipeline;

}
}

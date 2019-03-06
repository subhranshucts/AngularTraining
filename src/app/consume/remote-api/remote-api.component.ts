import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-remote-api',
  templateUrl: './remote-api.component.html',
  styleUrls: ['./remote-api.component.css']
})
export class RemoteApiComponent implements OnInit {

  constructor(private rest:RestapiService) { }

  ngOnInit() {
    this.rest.getRemoteData()
  }

}

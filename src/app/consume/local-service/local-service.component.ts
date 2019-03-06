import { Component, OnInit } from '@angular/core';
import { FriendServiceService } from 'src/app/services/friend-service.service';

@Component({
  selector: 'app-local-service',
  templateUrl: './local-service.component.html',
  styleUrls: ['./local-service.component.css']
})
export class LocalServiceComponent implements OnInit {

  constructor(private ls:FriendServiceService) { }

  ngOnInit() {
console.log(this.ls.sayHello())
console.log(this.ls.cabService)
this.ls.welcome()

  }

}

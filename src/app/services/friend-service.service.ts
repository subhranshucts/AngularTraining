import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendServiceService {
  
  cabService=['ola','uber','zoom']
  sayHello(){
    return "Welcome to cab Service API"
  }
welcome(){
  console.log("Welcome to Cab Service")
}

  constructor() { }
}

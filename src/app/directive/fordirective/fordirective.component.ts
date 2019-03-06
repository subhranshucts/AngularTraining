import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  friends:string[]=['rama', 'manish','seemi', 'ankit','tara','john','dev','tom']

  scores = [41, 31, 21, 51 , 61, 2, 5, 1]

  locations = [
    {
      city:"Chennai",
      code:"044"
    },
    {
      city:"Bengaluru",
      code:"080"
    },
    {
      city:"Hyd",
      code:"0291"
    },
    {
      city:"Del",
      code:"0081"
    }
  ]

  display:boolean=false

  check = "subhra"

  salary = 434

  birthday = new Date()

  constructor() { }

  ngOnInit() {
  }

}

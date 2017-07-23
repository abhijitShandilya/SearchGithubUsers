import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public happyText = "It's a holiday";

  public myTodos :String[] = [
    "watch GOT",
    "watch google I/O",
    "browse r/soccer",
    "netflix"
  ];

  constructor() { }

  ngOnInit() {
    this.happyText = "It's going to rain today !";
  }
  makeHappier(){
this.happyText = "It's going to rain and today is a holiday !";
  }

}

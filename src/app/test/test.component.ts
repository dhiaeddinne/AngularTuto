import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  public date = new Date;
  public message = "welcome to taysirsolutions ";
  public User = "Dhia";
  public greeting ="";
  display = false;
  public color = 'red';
  public colors = ["red","green","blue","yellow"]
  @Input() public parentData;
  // @Input('parentData) public name ;
  @Output() public childEvent = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    this.greeting = "Welcome Dhia";
  }
  logTest(value){
    console.log(value);
  }
  showTiteEvent(){
    this.childEvent.emit('Welcome To Angular Tuto');
  }
}

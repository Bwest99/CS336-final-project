import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-counter',
  templateUrl: './message-counter.component.html',
  styleUrls: ['./message-counter.component.scss'],
})
export class MessageCounterComponent implements OnInit {
  public count = 0;
  @Input() messageMax:number;
  @Output() result = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  raiseCount(){
    if(!this.checkMax()) {
      this.count++;
      this.sendCount();
    }
  }

  lowerCount(){
    if(!this.checkMin()){
      this.count--;
      this.sendCount()
    }
  }
  
  //checks to make sure count doesn't exceed the maximum number of messages
  checkMax(){
    return this.count === Number(this.messageMax);
  }

  //checks to make sure the count isn't equal to zero or one, if it is, the bool will be used to disable the lower count button
  checkMin(){
    return this.count === 0 || this.count === 1;
  }

  sendCount(){
    this.result.emit(this.count);
  }
}

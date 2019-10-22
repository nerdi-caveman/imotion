import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.css']
})
export class HomesliderComponent implements OnInit {

  @Input() category;
  @Input() inList;
  @Output() addToList = new EventEmitter();

  listToggle(){
    this.addToList.next('')
  }
  print(){
    console.log('print')
  }

  constructor() { }

  ngOnInit() {
  }

}

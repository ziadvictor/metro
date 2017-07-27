import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  @Output() colorClicked = new EventEmitter();
  selectedColor: string = '';

  constructor() { }

  onColorClicked(color){
    this.colorClicked.emit(color);
    this.selectedColor = color;
  }

  ngOnInit() {
  }

}

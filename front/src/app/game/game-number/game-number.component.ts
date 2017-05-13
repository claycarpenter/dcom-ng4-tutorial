import { Component, AfterContentInit, Input, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-game-number',
  templateUrl: './game-number.component.html',
  styleUrls: ['./game-number.component.css']
})
export class GameNumberComponent implements AfterContentInit {
  @Input('number') num: number;
  @Input('color') color: string;
  @ContentChild('numContainer') numContainer: ElementRef;

  constructor() { }

  ngAfterContentInit() {
    const targetColor = this.color == null ? 'gray' : this.color;
    this.numContainer.nativeElement.style.color = targetColor;
  }
}

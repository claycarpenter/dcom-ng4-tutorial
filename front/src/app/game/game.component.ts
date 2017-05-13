import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input('startNumber') startNumber: number;
  public currentNumber: number;
  public evenNumbers: number[] = [];
  public oddNumbers: number[] = [];

  ngOnInit() {
    this._resetGameState();
  }

  onInterval(intervalCount: number) {
    console.log(`Interval count: ${intervalCount}`);
    this.currentNumber++;

    if (this.currentNumber % 2 === 0) {
      this.evenNumbers.push(this.currentNumber);
    } else {
      this.oddNumbers.push(this.currentNumber);
    }
  }

  onGameState(newGameState: boolean) {
    console.log(`New game state: ${newGameState}`);
    if (newGameState) {
      this._resetGameState();
    }
  }

  private _resetGameState() {
    // Start with provided number
    this.currentNumber = this.startNumber || 0;

    this.evenNumbers = [];
    this.oddNumbers = [];
  }

}

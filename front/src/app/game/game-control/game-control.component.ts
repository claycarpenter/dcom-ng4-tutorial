import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervals = new EventEmitter<number>();
  @Output() gameStates = new EventEmitter<boolean>();
  private _intervalCounter = 0;
  private _interval: any;
  private _gameState = false;

  get isGameRunning() {
    return this._gameState;
  }

  onClickStart() {
    this.setGameState(true);

    // Start the interval counter.
    this._interval = setInterval(
      this.onInterval.bind(this),
      1000  // 1000 ms
    );
  }

  onClickStop() {
    // Just clear interval.
    clearInterval(this._interval);
    this._interval = undefined;

    this.setGameState(false);
  }

  private setGameState(newGameState) {
    this._gameState = newGameState;

    this.gameStates.emit(this._gameState);
  }

  onInterval() {
    this._intervalCounter++;
    this.intervals.emit(this._intervalCounter);
  }
}

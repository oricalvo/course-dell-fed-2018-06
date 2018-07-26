import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows: Row[];
  player: Player;

  constructor() {
    this.player = Player.X;
    this.initBoard();
  }

  onCellClicked(cell: Cell) {
    if(cell.value != Player.Empty) {
      return;
    }

    cell.value = this.player;

    this.switchPlayers();
  }

  switchPlayers() {
    this.player = (this.player == Player.X ? Player.O : Player.X);
  }

  private initBoard() {
    this.rows = [];

    for (let i = 0; i < 3; i++) {
      const row: Row = {
        cells: []
      };

      for (let j = 0; j < 3; j++) {
        const cell: Cell = {
          value: Player.Empty,
        };

        row.cells.push(cell);
      }

      this.rows.push(row);
    }
  }

  newGame() {
    this.initBoard();
  }
}

interface Row {
  cells: Cell[];
}

interface Cell {
  value: Player;
}

enum Player {
  Empty = "",
  X = "X",
  O = "0",
}

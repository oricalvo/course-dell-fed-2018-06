import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: Date;
  @Input() format: string;
  @Output() tick: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();

      this.tick.emit(this.time);
    }, 1000);
  }
}

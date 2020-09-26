import { Component, Input, OnInit } from '@angular/core';
import { RpgEvent } from 'src/app/services/event/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() public event: RpgEvent;

  public constructor() { }

  public ngOnInit() {
  }
}

import {Component} from 'angular2/angular2';
import {EventDetailComponent} from './event-detail'
import {EventService} from '../services/event';
import {EventModel} from '../models/event';

@Component({
  selector: 'event-list',
  template: `
      <event-detail (click)="onSelect(event)" *ng-for="#event of events" [event]="event" [selectedEvent]="selectedEvent"></event-detail>
  `,
  providers: [EventService],
  directives: [EventDetailComponent]
})
export class EventListComponent {
  public events: EventModel[];
  public selectedEvent: EventModel;

  constructor(private _eventService: EventService) {
    this.selectedEvent = undefined;
    this.events = [];
    this._eventService.getEvents().then(events => this.events = events);
  }

  onSelect(event: EventModel) {
    this.selectedEvent = event;
  }
}

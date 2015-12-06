import {Component} from 'angular2/angular2';
import {EventEditComponent} from './event-edit'
import {EventService} from '../services/event';
import {Event} from '../models/event';

@Component({
  selector: 'events',
  templateUrl: 'app/components/events.html',
  styleUrls: ['app/components/events.css'],
  providers: [EventService],
  directives: [EventEditComponent]
})
export class EventsComponent implements OnInit {
  public events: Event[];
  public selectedEvent: Event;

  constructor(private _eventService: EventService) {
    this.selectedEvent = undefined;
    this.events = [];
    this._eventService.getEvents().then(events => this.events = events);
  }

  onSelect(event: Event) { this.selectedEvent = event; }
}

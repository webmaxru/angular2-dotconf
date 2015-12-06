import {Component, Input} from 'angular2/angular2';
import {EventModel} from '../models/event';

@Component({
  selector: 'event-detail',
  templateUrl: 'app/components/event-detail.html',
  styleUrls: ['app/components/event-detail.css'],
})
export class EventDetailComponent {
  @Input() event: EventModel;
  @Input() selectedEvent: EventModel;
}

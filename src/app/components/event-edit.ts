import {Component, Input} from 'angular2/angular2';
import {Event} from '../models/event';

@Component({
  selector: 'event-edit',
  templateUrl: 'app/components/event-edit.html',
  styleUrls: ['app/components/event-edit.css'],
})
export class EventEditComponent {
  @Input() event: Event;
}

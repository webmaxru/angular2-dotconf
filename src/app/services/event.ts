import {EVENTS} from '../models/mock-events';
import {Event} from '../models/event';

export class EventService {
  getEvents() {
    return Promise.resolve(EVENTS);
  }
}

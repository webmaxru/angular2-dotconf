import {EVENTS} from './mock-events';

export class EventService {
  getEvents() {
    return Promise.resolve(EVENTS);
  }
}

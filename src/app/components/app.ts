import {bootstrap, Component} from 'angular2/angular2';
import {EventListComponent} from './event-list';
import {EventEditComponent} from './event-edit';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <event-list #event-list-ref class="layout-col-left"></event-list>
    <event-edit [event]="eventListRef.selectedEvent" class="layout-col-right"></event-edit>
  `,
  directives: [EventListComponent, EventEditComponent]
})
export class AppComponent {
  public title = 'Best ever conferences';
}

bootstrap(AppComponent);

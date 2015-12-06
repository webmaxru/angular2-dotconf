import {bootstrap, Component} from 'angular2/angular2';
import {EventsComponent} from './events';

@Component({
  selector: 'app',
  template: `
  <h1>{{title}}</h1>
  <events>Events</events>
  `,
  styles: ['h1 {font-weight: normal;}'],
  directives: [EventsComponent]
})
export class AppComponent {
  public title = 'Best ever conferences';
}

bootstrap(AppComponent);

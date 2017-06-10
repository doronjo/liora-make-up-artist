import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `<h1>{{title}}</h1>`,
})
export class AppComponent {
  title = 'My Site';
}
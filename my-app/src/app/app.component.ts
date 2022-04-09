import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  collapsed = true;
  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}

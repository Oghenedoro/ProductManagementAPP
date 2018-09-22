import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productManagement';

  showHideSidebar : boolean = false;

   onshowChange(showHideSidebar){
    this.showHideSidebar = showHideSidebar;
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()
  showTheSideBar : boolean;

  @Output()
  showSideBarChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  afficherSideBar(){
    this.showTheSideBar = !this.showTheSideBar;
   this.showSideBarChange.emit(this.showTheSideBar);
  }

  logout() {
      this.appService.logout(() => {
      this.router.navigateByUrl('/login');
    });
  }
}

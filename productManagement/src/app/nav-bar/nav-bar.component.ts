import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  afficherSideBar(){
    this.showTheSideBar = !this.showTheSideBar;
   this.showSideBarChange.emit(this.showTheSideBar);
  }
}

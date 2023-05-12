import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('b') btn: ElementRef;
  url ;
  constructor(private router:Router) {
    this.isUser();
    this.url = router.url
   }
   admin
  ngOnInit(): void {
  }

isUser(){
  this.router.events.subscribe((res) => {
   this.url = res?.['url']
  })
}
}
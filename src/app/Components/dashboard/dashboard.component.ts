import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sidebarOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // كل مرة بيتغير الـ route، نقفل الـ sidebar في الموبايل فقط
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && window.innerWidth < 768) {
        this.sidebarOpen = false;
      }
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

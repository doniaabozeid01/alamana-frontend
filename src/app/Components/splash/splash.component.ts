import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      // بعد 3 ثواني ينتقل لصفحة الـ Dashboard
      this.router.navigateByUrl('/dashboard');
    }, 3000);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  imageSrc = 'assets/images/Library.png';  
  imageAlt = 'LibraryBanner';

  constructor(private router: Router) { }

  onStart(): void {
    const navigationDetails: string[] = ['survey'];
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
  }

}

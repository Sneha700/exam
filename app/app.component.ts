import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLoading: boolean = true;
  loggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Simulating loading process
    setTimeout(() => {
      this.showLoading = false;
      this.router.navigate(['/login']);
    }, 3000); // Change the delay as per your requirement
  }

  onLoggedIn() {
    this.loggedIn = true;
    this.router.navigate(['/dashboard']);
  }
  
  verifyOtp() {
    this.router.navigate(['/dashboard']);
  }
}
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {
  showOtpVerification = false;
  countdown: number = 30;
  otp: string[] = Array(6).fill('');

  constructor(private router: Router) {}

  
  startCountdown(): void {
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  onSubmit(form: NgForm) {
    const phone = form.value.phone;
    if (/^\d{10}$/.test(phone)) {
      // Phone number is valid, do something
      this.showOtpVerification = true;
      this.startCountdown();
    } else {
      // Phone number is invalid, show error message
    }
  }

  onOtpChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Only allow one digit per input box
    if (value.length > 1) {
      input.value = value.slice(0, 1);
    }

    // Update the OTP array with the new value
    this.otp[index] = input.value;

    // Focus on the next input box if available
    if (index < this.otp.length - 1) {
      const nextInput = input.nextElementSibling as HTMLInputElement;
      nextInput.focus();
    }
  }
  resendOTP(): void {
    // Code to resend OTP goes here
    this.countdown = 30;
    this.startCountdown();
  }


  verifyOtp(){
    this.router.navigate(["/dashboard"]);
  }
}

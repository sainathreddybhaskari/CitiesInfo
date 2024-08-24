import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule] // Import required modules here
})
export class LoginComponent {
  loginForm: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {
      console.log('LoginComponent loaded');  // Add this log to see when the component is loaded
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.http.post('https://localhost:7232/Login', { username, password })
        .subscribe({
          next: (response) => {
            if(response){
              this.router.navigate(['/city-selector']);
            }
            console.log('Login successful:', response);
            // Handle successful login here, like navigating to a dashboard
          },
          error: (error) => {
            console.error('Login failed:', error);
    }
  });
}
  }}

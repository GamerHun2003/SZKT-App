import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../models/User';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-logincomponent',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, 
    MatInputModule, MatButtonModule, MatLabel, MatCard],
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.scss'
})
export class LogincomponentComponent {
  @Input() user: User = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    isloggedIn: false,
    isregisteredIn: false,
    isAdmin: false,
    isStudent: false,
    tickets: [],
    cardNumber: '',
    savedRoutes: [],
  };

  @Output() userUpdated = new EventEmitter<User>();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<LogincomponentComponent>) {
   
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required]], 
    });
  }


  onSubmit(): void {
    const userDataString = localStorage.getItem('user');
    const userData = userDataString ? JSON.parse(userDataString) : null;
  
    console.log('userData:', userData);
  
    if (this.loginForm.valid && userData) {
      const formEmail = this.loginForm.value.email;
      const formPassword = this.loginForm.value.password;
      
      if (userData.email.toLowerCase() === formEmail.toLowerCase() && userData.password === formPassword) {
        userData.isloggedIn = true;
        localStorage.setItem('user', JSON.stringify(userData)); 
        this.userUpdated.emit(userData);
        console.log(userData); 
        console.log('Login successful!');
        this.dialogRef.close();
      } else {
        console.log('Invalid email or password');
        console.log('Readed:', userData.email, userData.password);
        console.log('Fromform:', formEmail, formPassword);
      }
    } else {
      console.log('Form is invalid or no user data found');
    }
  }

 
  onCancel(): void {
    this.dialogRef.close();
  }
}
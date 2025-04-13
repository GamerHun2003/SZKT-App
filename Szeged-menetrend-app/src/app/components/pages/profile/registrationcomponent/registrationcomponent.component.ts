import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/User';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-registrationcomponent',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatLabel, MatCard],
  templateUrl: './registrationcomponent.component.html',
  styleUrl: './registrationcomponent.component.scss'
})
export class RegistrationcomponentComponent {
  registrationForm: FormGroup;
  passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;;
  @Input()user: User ={
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

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<RegistrationcomponentComponent>, private router: Router) { 
    this.registrationForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Zá-űÁ-Ú]+$')]], 
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Zá-űÁ-Ú]+$')]],  
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(8), 
      Validators.pattern(this.passwordpattern)]], 
      });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.user.firstname = this.registrationForm.value.firstname;
      this.user.lastname = this.registrationForm.value.lastname;
      this.user.email = this.registrationForm.value.email;
      this.user.password = this.registrationForm.value.password;
      this.user.isloggedIn = true;
      this.user.isregisteredIn = true;
      this.userUpdated.emit(this.user);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.dialogRef.close();
      console.log('User successfully registered!');
      console.log('Userdata:', this.user);  
    } else {
      console.log('Form invalid');
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  

}
  


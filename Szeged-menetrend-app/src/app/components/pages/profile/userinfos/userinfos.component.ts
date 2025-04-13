import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CardnumberPipe } from '../../../../pipes/cardnumber.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { User } from '../../../../models/User';
import { Router } from '@angular/router';
import { MatDialogRef} from '@angular/material/dialog';
import {Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-userinfos',
  imports: [ReactiveFormsModule, CardnumberPipe, MatFormFieldModule, MatInputModule, 
    MatButtonModule, MatLabel, MatError, CommonModule, MatCard],
  templateUrl: './userinfos.component.html',
  styleUrl: './userinfos.component.scss'
})
export class UserinfosComponent {
  form: FormGroup;
  cardType: string = '';
  valid: string = '^[0-9]{8,19}$'; 
  @Input()user: User ={
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    isloggedIn: false,
    isregisteredIn: true,
    isAdmin: false,
    isStudent: false,
    tickets: [],
    cardNumber: '',
    savedRoutes: [],
  };
  @Output() userUpdated = new EventEmitter<User>();
  constructor(private fb: FormBuilder, private router: Router, private dialogRef: MatDialogRef<UserinfosComponent>) {
    this.form = this.fb.group({
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Zá-űÁ-Ú]+$')]],
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Zá-űÁ-Ú]+$')]],
      email: ['', [Validators.required, Validators.email]],
      studentId: [''],
      cardNumber: [''],
    });
  }
  onSubmit() {
    const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : {};
    console.log(this.form.value);
    console.log("User data saved successfully!");
    this.user.email = this.form.value.email;
    this.user.firstname = this.form.value.firstName;
    this.user.lastname = this.form.value.lastName;
    this.user.studentID = this.form.value.studentId;
    this.user.cardNumber = this.form.value.cardNumber;
    this.user.isloggedIn = userData.isloggedIn;
    this.user.isAdmin = false;
    this.user.password=userData.password;
    if(this.form.value.studentId!=''){
      this.user.isStudent = true;
    }
    localStorage.setItem('user', JSON.stringify(this.user));
    this.userUpdated.emit(this.user);
    this.dialogRef.close(); 
  }
  onCancel(): void {
    this.dialogRef.close(); 
  }
  blockNonNumbers(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (
      !/[0-9]/.test(event.key) &&
      !allowedKeys.includes(event.key)
    ) {
      event.preventDefault();
    }
  }
  cardtypecheck(cardNumber: string): void{
    if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
      this.cardType = 'American Express';
  
    } else if (cardNumber.startsWith('4')) {
      this.cardType = 'Visa';
      
    } else if (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55')) {
      this.cardType='MasterCard';
    } else if (cardNumber.startsWith('6')) {
      this.cardType='Discover';
    } else {
      this.cardType='Unknown';
    }
  }
  onCardNumberInput(cardNumber: string): void {
    this.cardtypecheck(cardNumber);
  }
  
  
}

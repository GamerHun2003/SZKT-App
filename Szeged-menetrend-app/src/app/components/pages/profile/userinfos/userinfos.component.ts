import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CardnumberPipe } from '../../../../pipes/cardnumber.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-userinfos',
  imports: [ReactiveFormsModule, CardnumberPipe, MatFormFieldModule, MatInputModule, MatButtonModule, MatLabel, MatError, CommonModule],
  templateUrl: './userinfos.component.html',
  styleUrl: './userinfos.component.scss'
})
export class UserinfosComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      studentId: [''],
      cardNumber: ['', Validators.pattern(/^[0-9]{8,16}$/)]
    });
  }
  onSubmit() {
    console.log(this.form.value);
  }
}

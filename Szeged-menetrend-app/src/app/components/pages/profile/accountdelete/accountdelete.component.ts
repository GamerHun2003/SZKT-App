import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-accountdelete',
  imports: [MatButtonModule],
  templateUrl: './accountdelete.component.html',
  styleUrl: './accountdelete.component.scss'
})
export class AccountdeleteComponent {
  constructor(private dialogRef: MatDialogRef<AccountdeleteComponent>){
    
  }
  onConfirm(): void {
      
    localStorage.removeItem('user');
    this.dialogRef.close();
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}

import { Component, OnInit, Input, } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditUserService } from '../fetch-api-data.service';

@Component({
  selector: 'app-update-profile-view',
  templateUrl: './update-profile-view.component.html',
  styleUrls: ['./update-profile-view.component.scss'],
})
export class UpdateProfileViewComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchUserData: EditUserService,
    public dialogRef: MatDialogRef<UpdateProfileViewComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  editUser(): void {
    this.fetchUserData.EditUser(this.userData).subscribe(
      (resp) => {
        this.dialogRef.close();
        localStorage.setItem('user', resp.Username);
        localStorage.setItem('Email', resp.Email);
        localStorage.setItem('Birthday', resp.Birthday);
        this.snackBar.open('Profile updated successfully!', 'OK', {
          duration: 2000,
        });
      },
      (res) => {
        console.log(res);
        this.snackBar.open(res, 'OK', {
          duration: 2000,
        });
      }
    );
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
}
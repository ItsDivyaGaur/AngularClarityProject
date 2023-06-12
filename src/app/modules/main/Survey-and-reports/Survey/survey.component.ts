import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from "@clr/angular";
import { NgForm } from '@angular/forms';
import { User } from '../../interface/users';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  user: User;

  constructor() { 
    this.user = {} as User;
  }

  @ViewChild("wizardlg") wizardLarge: ClrWizard;
  lgOpen: boolean = true;

  ngOnInit(): void {
  }
  categories =["Science", "Fiction", "Finance", "Business", "Devotional", "Stories", "Biography", "Knowledge", "Personal Growth"];
  public validate(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
     console.info('firstName:', this.user.firstName);
     console.info('lastName:', this.user.lastName);
     console.info('Email:', this.user.email);
     console.info('gender:', this.user.gender);
     console.info('User Type:', this.user.userType);
  }
  onFormSubmit(){

  }
}



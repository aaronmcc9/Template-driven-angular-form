import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = "pet";
  answer: string;
  submitted = false;  
  genders = ["male", "female"];
  user = {
    username: '', 
    email: '',
    question: '',
    answer: '',
    gender: '',

  }
  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(form: HTMLFormElement) {
    this.submitted = true;

    console.log(form);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.question = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questions;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
    console.log('user',this.user);

  }
}

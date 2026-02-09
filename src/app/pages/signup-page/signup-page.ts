import { Component } from '@angular/core';
import { SignupForm } from "../../features/signup/signup-form/signup-form";

@Component({
  selector: 'app-signup-page',
  imports: [SignupForm],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css',
})
export class SignupPage {

}

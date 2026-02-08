import { Component } from '@angular/core';
import {  LucideAngularModule } from "lucide-angular"
import { GoBackBtn } from "../../components/shared/go-back-btn/go-back-btn";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  imports: [LucideAngularModule, GoBackBtn, RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {

}

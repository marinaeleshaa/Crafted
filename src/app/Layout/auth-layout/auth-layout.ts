import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Location } from '@angular/common';
import { Button } from "../../components/ui/button/button";
import { CircleChevronLeft, LucideAngularModule } from "lucide-angular"

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, Button, LucideAngularModule],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {

  constructor(private location: Location) {}
  readonly CircleChevronLeft = CircleChevronLeft
  goBack() {
    this.location.back();
  }
}

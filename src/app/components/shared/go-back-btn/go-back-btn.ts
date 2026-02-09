import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Location } from '@angular/common';
import { CircleChevronLeft, LucideAngularModule } from "lucide-angular"
import { Button } from "../../ui/button/button";

@Component({
  selector: 'app-go-back-btn',
  imports: [LucideAngularModule, Button],
  templateUrl: './go-back-btn.html',
  styleUrl: './go-back-btn.css',
})
export class GoBackBtn {
 constructor(private location: Location) {}
  readonly CircleChevronLeft = CircleChevronLeft
  goBack() {
    this.location.back();
  }

}

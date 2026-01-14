import { Component } from '@angular/core';
import { HomeHero } from "../../features/home/home-hero/home-hero";

@Component({
  selector: 'app-home-page',
  imports: [HomeHero],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}

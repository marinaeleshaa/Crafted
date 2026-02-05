import { Component } from '@angular/core';
import { HomeHero } from "../../features/home/home-hero/home-hero";
import { WhyCrafted } from "../../features/home/why-crafted/why-crafted";

@Component({
  selector: 'app-home-page',
  imports: [HomeHero, WhyCrafted],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}

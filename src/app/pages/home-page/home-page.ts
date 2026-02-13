import { Component } from '@angular/core';
import { HomeHero } from "../../features/home/home-hero/home-hero";
import { WhyCrafted } from "../../features/home/why-crafted/why-crafted";
import { Card } from "../../components/shared/card/card";

@Component({
  selector: 'app-home-page',
  imports: [HomeHero, WhyCrafted, Card],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}

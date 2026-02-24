import { Component } from '@angular/core';
import { HomeHero } from "../../features/home/home-hero/home-hero";
import { WhyCrafted } from "../../features/home/why-crafted/why-crafted";
import { Card } from "../../components/shared/card/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-page',
  imports: [HomeHero, WhyCrafted, Card, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}

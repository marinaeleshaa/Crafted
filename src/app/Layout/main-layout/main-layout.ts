import { Component } from '@angular/core';
import { Navbar } from "../../components/shared/navbar/navbar";
import { MobileNavbar } from "../../components/shared/mobile-navbar/mobile-navbar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, MobileNavbar, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}

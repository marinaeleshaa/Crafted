import { Component } from '@angular/core';
import { GoBackBtn } from '../../components/shared/go-back-btn/go-back-btn';
import { CommonModule } from '@angular/common';
import { Button } from '../../components/ui/button/button';
import { Heart, LucideAngularModule, ShoppingCart, SquarePen } from 'lucide-angular';
import { ProductDetailsCard } from '../../components/shared/product-details-card/product-details-card';

@Component({
  selector: 'app-product-details-page',
  imports: [GoBackBtn, ProductDetailsCard],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.css',
})
export class ProductDetailsPage {}

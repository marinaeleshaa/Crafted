import { Component } from '@angular/core';
import { GoBackBtn } from '../../components/shared/go-back-btn/go-back-btn';
import { CommonModule } from '@angular/common';
import { Button } from '../../components/ui/button/button';
import { Heart, LucideAngularModule, ShoppingCart, SquarePen } from 'lucide-angular';

@Component({
  selector: 'app-product-details-page',
  imports: [GoBackBtn, CommonModule, Button, LucideAngularModule],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.css',
})
export class ProductDetailsPage {
  HeartIcon = Heart;
  CartIcon = ShoppingCart;
  EditIcon = SquarePen;

  images = [
    'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  ];

  colors = ['pink-200', 'secondary', 'pop', 'pink-500'];

  sizes = ['S', 'M', 'L', 'XL'];
}

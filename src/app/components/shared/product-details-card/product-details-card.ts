import { Component, input } from '@angular/core';
import { Button } from '../../ui/button/button';
import { Heart, LucideAngularModule, ShoppingCart, SquarePen } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-details-card',
  imports: [Button, LucideAngularModule, CommonModule],
  templateUrl: './product-details-card.html',
  styleUrl: './product-details-card.css',
})
export class ProductDetailsCard {
  HeartIcon = Heart;
  CartIcon = ShoppingCart;
  EditIcon = SquarePen;

  productExample: Product = {
    id: 1,
    name: 'Stylish Sneakers',
    description: 'Comfortable and stylish sneakers for everyday use.',
    price: 99.99,
    imageUrl:
      'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    gallery: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ],
    colors: ['pink-200', 'secondary', 'pop', 'pink-500'],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      {
        title: 'Material',
        description: 'Made from high-quality materials for durability and comfort.',
      },
      {
        title: 'Care Instructions',
        description: 'Machine washable. Air dry for best results.',
      },
      {
        title: 'Fit',
        description: 'True to size. We recommend ordering your normal size.',
      },
      {
        title: 'Shipping',
        description: 'Free shipping on orders over $50. Delivered within 5-7 business days.',
      },
    ],
  };

  product = input<Product>(this.productExample);

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

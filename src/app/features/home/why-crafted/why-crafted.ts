import { Component } from '@angular/core';
import { CreditCard, Cuboid, ExternalLink, Eye, Heart, Layers, Sparkles, LucideAngularModule, Share } from 'lucide-angular';

@Component({
  selector: 'app-why-crafted',
  imports: [LucideAngularModule],
  templateUrl: './why-crafted.html',
  styleUrl: './why-crafted.css',
})
export class WhyCrafted {
  readonly points = [
    {
      title: 'Real-Time 3D Customization',
      icon: Cuboid,
    },
    {
      title: 'Interactive & Intuitive Experience',
      icon: Sparkles,
    },
    {
      title: 'Multiple Product & Material Options',
      icon: Layers,
    },
    {
      title: 'Save & Share Your Designs',
      icon: Share,
    },
    {
      title: 'AR Mode for Immersive Preview',
      icon: Eye,
    },
    {
      title: 'Seamless Checkout & Integration',
      icon: CreditCard,
    },
  ];
}

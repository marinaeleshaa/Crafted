import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CreditCard, Cuboid, ExternalLink, Eye, Heart, Layers, Sparkles, LucideAngularModule, Share } from 'lucide-angular';

@Component({
  selector: 'app-why-crafted',
  imports: [LucideAngularModule],
  templateUrl: './why-crafted.html',
  styleUrl: './why-crafted.css',
})
export class WhyCrafted implements AfterViewInit {
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

   @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  canScrollLeft = false;
  canScrollRight = true;



  ngAfterViewInit() {
    // Initial check for scroll availability
    setTimeout(() => this.onScroll(), 100);
  }

  onScroll() {
    const container = this.scrollContainer.nativeElement;
    this.canScrollLeft = container.scrollLeft > 0;
    this.canScrollRight =
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1;
  }

  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  shareToWhatsApp() {
    const text = encodeURIComponent(`Посмотри, что я нашел на Kaspi: ${this.product.name}\n${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareToTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Посмотри на ${this.product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  changeImage(img: string) {
    this.product.image = img;
  }
}

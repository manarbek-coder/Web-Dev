import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Palit RTX 5080 GamingPro 16 GB',
      description: 'Мощная игровая видеокарта на базе NVIDIA GeForce RTX 5080 с 16 ГБ GDDR7 памяти. Отличается высоким уровнем производительности для игр, поддержкой трассировки лучей и технологий DLSS 4.',
      price: 886990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p90/32578879.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/p90/32578879.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pab/p90/32578879.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pab/p90/32578879.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/palit-rtx-5080-gamingpro-ne75080019t2-gb2031a-16-gb-137012023/?c=750000000'
    },
    {
      id: 2,
      name: 'Gigabyte RTX 5090 Windforce OC 32 GB',
      description: 'Топ‑уровневая видеокарта NVIDIA GeForce RTX 5090 с 32 ГБ сверхбыстрой GDDR7 памяти. Обеспечивает невероятную производительность для игр и профессиональных задач, мощное охлаждение WINDFORCE.',
      price: 1949990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc5/p7d/32998176.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/p7d/32998176.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/p7d/32998176.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/p7d/32998176.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/gigabyte-rtx-5090-windforce-oc-gv-n5090wf3oc-32gd-32-gb-137115470/?c=750000000'
    },
    {
      id: 3,
      name: 'Palit RTX 5070 Infinity 3 12 GB',
      description: 'Стайлер для разных типов волос. Сушка и укладка без экстремального перегрева.',
      price: 285000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5070-infinity-3-ne75070019k9-gb2050s-12-gb-144023378/?c=750000000'
    },
    {
      id: 4,
      name: 'Palit RTX 5060 Dual 8 GB',
      description: 'Видеокарта средней категории для игр и мультимедиа на базе NVIDIA GeForce RTX 5060 с 8 ГБ видеопамяти GDDR7, активным охлаждением на 2 вентилятора.',
      price: 414990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfb/p7b/43159871.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pfb/p7b/43159871.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfb/p7b/43159871.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfb/p7b/43159871.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5060-dual-8-gb-139915785/?c=750000000'
    },
    {
      id: 5,
      name: 'AMD Ryzen 5 7500F OEM',
      description: '6‑ядерный процессор AMD Ryzen 5 7500F без встроенной графики, 12 потоков, частота до 5.0 ГГц. Отличный выбор для игр и повседневных задач в связке с дискретной видеокартой.',
      price: 85000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/h32/84125035036702.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/h32/84125035036702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/h32/84125035036702.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/h32/84125035036702.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/amd-ryzen-5-7500f-oem-113680438/?c=750000000'
    },
    {
      id: 6,
      name: 'AMD Ryzen 7 7800X3D OEM',
      description: '8‑ядерный процессор AMD Ryzen 7 7800X3D с высоким игровым потенциалом, встроенной технологией 3D‑кэша для ускорения игр и сложных задач.',
      price: 193990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h54/82965705752606.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h54/82965705752606.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h54/82965705752606.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h54/82965705752606.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/amd-ryzen-7-7800x3d-oem-112679525/?c=750000000'
    },
    {
      id: 7,
      name: 'AMD Ryzen 9 9950X3D OEM',
      description: 'Флагманский 16‑ядерный процессор с 32 потоками, идеальный для игр, рендеринга и многозадачности. Работает до 5.7 ГГц, с поддержкой DDR5 и большим кэшем.',
      price: 400000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7a/pdb/38043725.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7a/pdb/38043725.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7a/pdb/38043725.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7a/pdb/38043725.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/amd-ryzen-9-ryzen-9-9950x3d-oem-138490757/?c=750000000'
    },
    {
      id: 8,
      name: 'Intel Core i5‑13400F OEM',
      description: '10‑ядерный процессор Intel Core i5‑13400F без встроенной графики, хорошая производительность для игр и рабочих задач.',
      price: 90000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/h1b/86371733438494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h1b/86371733438494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h1b/86371733438494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h1b/86371733438494.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/intel-core-i5-13400f-oem-108565037/?c=750000000'
    },
    {
      id: 9,
      name: 'Intel Core i7‑14700KF OEM',
      description: 'Мощный процессор Intel Core i7‑14700KF с 20 ядрами и высокой тактовой частотой до ~5.6 ГГц, ориентирован на требовательные игры и продуктивные задачи.',
      price: 200000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p95/p48/78326439.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p95/p48/78326439.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/p48/78326439.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/p48/78326439.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/intel-core-i7-14700kf-oem-114244127/?c=750000000'
    },
    {
      id: 10,
      name: 'Intel Core i9‑14900KF OEM',
      description: 'Флагманский Intel Core i9‑14900KF с 24 ядрами и до 6.0 ГГц, обеспечивает высочайшую производительность. Отличный выбор для игр, стриминга, обработки видео и больших вычислений.',
      price: 300000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h84/84450342699038.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h49/h84/84450342699038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/h84/84450342699038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/h84/84450342699038.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/intel-core-i9-14900kf-oem-114335020/?c=750000000'
    }
  ];
}

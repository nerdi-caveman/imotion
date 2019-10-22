import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {
  @Input() category: object;
  @Input() categoryTitle: string;
  categories = this.category;
  @Input() margin: boolean;

  constructor() {
   }

  ngOnInit() {
  }

}

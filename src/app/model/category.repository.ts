import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable()
export class CategoryRepository implements OnInit {
  private categories: Category[] = [];

  constructor(private restService: RestService) {
    this.restService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  ngOnInit(): void {}

  getCategory(id: number): Category {
    return this.categories.find((p) => p.id == id);
  }

  getCategories(): Category[] {
    return this.categories;
  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category | null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(async (response) => {
      this.categories = response;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    if (category === this.currentCategory) {
      return 'list-group-item active';
    }
    return 'list-group-item';
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return 'list-group-item active';
    }
    return 'list-group-item';
  }
  setAllCategory() {
    return (this.currentCategory = null);
  }
}
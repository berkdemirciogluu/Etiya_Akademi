import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { DashboardCategoriesPageComponent } from './pages/dashboard-categories-page/dashboard-categories-page.component';
import { CategoryFormPageComponent } from './pages/category-form-page/category-form-page.component';
import { DashboardCategoriesListComponent } from './components/dashboard-categories-list/dashboard-categories-list.component';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryFormComponent,
    DashboardCategoriesPageComponent,
    CategoryFormPageComponent,
    DashboardCategoriesListComponent,
    FilterCategoryPipe,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CategoryComponent],
})
export class CategoryModule {}

import { Component, OnInit } from '@angular/core';
import localJsonData from '../LocalJsonData.json';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/repository/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  //categories = ['Bilim Kurgu', 'Aksiyon', 'Macera', 'Dram', 'Romantik'];

  // categories: Category[] = [
  //   { id: 1, name: 'Bilim Kurgu' },
  //   { id: 2, name: 'Aksiyon' },
  //   { id: 3, name: 'Macera' },
  //   { id: 4, name: 'Dram' },
  //   { id: 5, name: 'Romantik' },
  // ];

  GeneralData = localJsonData;
  categories: Category[];
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
    console.log(this.categoryRepository.getCategoryById(3));
  }

  ngOnInit(): void {}
}

import { Category } from '../category';

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      { id: 1, name: 'Science Fiction' },
      { id: 2, name: 'Action' },
      { id: 3, name: 'Adventure' },
      { id: 4, name: 'Drama' },
      { id: 5, name: 'Romantic' },
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category {
    return this.categories.find((c) => c.id == id);
  }
  
}

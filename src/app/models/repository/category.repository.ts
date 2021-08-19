import { Category } from '../category';

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      { id: 1, name: 'Bilim Kurgu' },
      { id: 2, name: 'Aksiyon' },
      { id: 3, name: 'Macera' },
      { id: 4, name: 'Dram' },
      { id: 5, name: 'Romantik' },
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category {
    return this.categories.find((c) => c.id == id);
  }
  
}

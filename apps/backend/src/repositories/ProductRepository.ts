import { Product, ProductCategory } from '../types';

class ProductRepository {
  private products: Product[] = [];
  private categories: ProductCategory[] = [];

  // Categories
  findAllCategories(): ProductCategory[] {
    return this.categories;
  }

  findCategoryById(id: string): ProductCategory | undefined {
    return this.categories.find(c => c.id === id);
  }

  createCategory(category: Omit<ProductCategory, 'id'>): ProductCategory {
    const newCategory: ProductCategory = {
      id: `category_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...category
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  // Products
  findAll(): Product[] {
    return this.products;
  }

  findById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  findByCategoryId(categoryId: string): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  create(product: Omit<Product, 'id'>): Product {
    const newProduct: Product = {
      id: `product_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...product
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, product: Partial<Product>): Product | undefined {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return undefined;
    
    this.products[index] = { ...this.products[index], ...product };
    return this.products[index];
  }

  delete(id: string): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    this.products.splice(index, 1);
    return true;
  }

  seedCategories(categories: ProductCategory[]): void {
    this.categories = categories;
  }

  seedProducts(products: Product[]): void {
    this.products = products;
  }
}

export default new ProductRepository();

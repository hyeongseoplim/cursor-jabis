import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { productsAPI } from '@/services/api';
import { Product, ProductCategory } from '@/types';
import { Package } from 'lucide-react';

export function ProductList() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const [categoriesData, productsData] = await Promise.all([
        productsAPI.getCategories(),
        productsAPI.getAll(),
      ]);
      setCategories(categoriesData);
      setProducts(productsData);
    } catch (error) {
      console.error('제품 목록 로딩 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  const getProductsByCategory = (categoryId: string) => {
    return products.filter(p => p.categoryId === categoryId);
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">제품 관리</h2>
        <p className="text-muted-foreground">제품군 및 제품 목록을 확인합니다</p>
      </div>

      <div className="space-y-6">
        {categories.map(category => {
          const categoryProducts = getProductsByCategory(category.id);
          return (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  {category.name}
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryProducts.map(product => (
                    <div
                      key={product.id}
                      className="p-4 border rounded-lg hover:bg-accent transition-colors"
                    >
                      <h4 className="font-semibold mb-2">{product.name}</h4>
                      {product.description && (
                        <p className="text-sm text-muted-foreground mb-3">
                          {product.description}
                        </p>
                      )}
                      <p className="text-lg font-bold text-primary">
                        {formatCurrency(product.price)}
                      </p>
                    </div>
                  ))}
                </div>
                {categoryProducts.length === 0 && (
                  <p className="text-center text-muted-foreground py-4">
                    등록된 제품이 없습니다
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

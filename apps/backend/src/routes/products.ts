import { Router, Request, Response } from 'express';
import ProductRepository from '../repositories/ProductRepository';

const router = Router();

// GET /api/products/categories
router.get('/categories', (req: Request, res: Response) => {
  try {
    const categories = ProductRepository.findAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// GET /api/products/categories/:id
router.get('/categories/:id', (req: Request, res: Response) => {
  try {
    const category = ProductRepository.findCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category' });
  }
});

// POST /api/products/categories
router.post('/categories', (req: Request, res: Response) => {
  try {
    const category = ProductRepository.createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
});

// GET /api/products
router.get('/', (req: Request, res: Response) => {
  try {
    const { categoryId } = req.query;
    let products;
    
    if (categoryId && typeof categoryId === 'string') {
      products = ProductRepository.findByCategoryId(categoryId);
    } else {
      products = ProductRepository.findAll();
    }
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET /api/products/:id
router.get('/:id', (req: Request, res: Response) => {
  try {
    const product = ProductRepository.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// POST /api/products
router.post('/', (req: Request, res: Response) => {
  try {
    const product = ProductRepository.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// PUT /api/products/:id
router.put('/:id', (req: Request, res: Response) => {
  try {
    const product = ProductRepository.update(req.params.id, req.body);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE /api/products/:id
router.delete('/:id', (req: Request, res: Response) => {
  try {
    const success = ProductRepository.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;

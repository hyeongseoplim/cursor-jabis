import { Router, Request, Response } from 'express';
import PersonRepository from '../repositories/PersonRepository';

const router = Router();

// GET /api/persons
router.get('/', (req: Request, res: Response) => {
  try {
    const { department } = req.query;
    let persons;
    
    if (department && typeof department === 'string') {
      persons = PersonRepository.findByDepartment(department);
    } else {
      persons = PersonRepository.findAll();
    }
    
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch persons' });
  }
});

// GET /api/persons/:id
router.get('/:id', (req: Request, res: Response) => {
  try {
    const person = PersonRepository.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch person' });
  }
});

// POST /api/persons
router.post('/', (req: Request, res: Response) => {
  try {
    const person = PersonRepository.create(req.body);
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create person' });
  }
});

// PUT /api/persons/:id
router.put('/:id', (req: Request, res: Response) => {
  try {
    const person = PersonRepository.update(req.params.id, req.body);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update person' });
  }
});

// DELETE /api/persons/:id
router.delete('/:id', (req: Request, res: Response) => {
  try {
    const success = PersonRepository.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete person' });
  }
});

export default router;

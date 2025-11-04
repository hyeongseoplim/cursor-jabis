import { Router, Request, Response } from 'express';
import ClientRepository from '../repositories/ClientRepository';

const router = Router();

// GET /api/clients
router.get('/', (req: Request, res: Response) => {
  try {
    const clients = ClientRepository.findAll();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
});

// GET /api/clients/:id
router.get('/:id', (req: Request, res: Response) => {
  try {
    const client = ClientRepository.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch client' });
  }
});

// POST /api/clients
router.post('/', (req: Request, res: Response) => {
  try {
    const client = ClientRepository.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create client' });
  }
});

// PUT /api/clients/:id
router.put('/:id', (req: Request, res: Response) => {
  try {
    const client = ClientRepository.update(req.params.id, req.body);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update client' });
  }
});

// DELETE /api/clients/:id
router.delete('/:id', (req: Request, res: Response) => {
  try {
    const success = ClientRepository.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete client' });
  }
});

export default router;

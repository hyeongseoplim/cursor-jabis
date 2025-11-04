import { Router, Request, Response } from 'express';
import ContractRepository from '../repositories/ContractRepository';
import EnvProfileRepository from '../repositories/EnvProfileRepository';

const router = Router();

// GET /api/contracts
router.get('/', (req: Request, res: Response) => {
  try {
    const { clientId, salesPersonId, from, to } = req.query;
    
    const filters = {
      clientId: clientId as string | undefined,
      salesPersonId: salesPersonId as string | undefined,
      from: from as string | undefined,
      to: to as string | undefined
    };
    
    const contracts = ContractRepository.findAll(filters);
    res.json(contracts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contracts' });
  }
});

// GET /api/contracts/:id
router.get('/:id', (req: Request, res: Response) => {
  try {
    const contract = ContractRepository.findById(req.params.id);
    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    res.json(contract);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contract' });
  }
});

// POST /api/contracts
router.post('/', (req: Request, res: Response) => {
  try {
    const contract = ContractRepository.create(req.body);
    res.status(201).json(contract);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contract' });
  }
});

// PUT /api/contracts/:id
router.put('/:id', (req: Request, res: Response) => {
  try {
    const contract = ContractRepository.update(req.params.id, req.body);
    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    res.json(contract);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contract' });
  }
});

// DELETE /api/contracts/:id
router.delete('/:id', (req: Request, res: Response) => {
  try {
    const success = ContractRepository.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contract' });
  }
});

// GET /api/contracts/:id/envs
router.get('/:id/envs', (req: Request, res: Response) => {
  try {
    const contract = ContractRepository.findById(req.params.id);
    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    
    const envProfiles = EnvProfileRepository.findByContractId(req.params.id);
    res.json(envProfiles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch environment profiles' });
  }
});

// POST /api/contracts/:id/envs
router.post('/:id/envs', (req: Request, res: Response) => {
  try {
    const contract = ContractRepository.findById(req.params.id);
    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }
    
    const envProfile = EnvProfileRepository.create({
      ...req.body,
      contractId: req.params.id
    });
    
    res.status(201).json(envProfile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create environment profile' });
  }
});

export default router;

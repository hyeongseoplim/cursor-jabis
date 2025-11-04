import express from 'express';
import cors from 'cors';

// Routes
import healthRouter from './routes/health';
import clientsRouter from './routes/clients';
import personsRouter from './routes/persons';
import productsRouter from './routes/products';
import contractsRouter from './routes/contracts';
import statsRouter from './routes/stats';

// Repositories
import ClientRepository from './repositories/ClientRepository';
import PersonRepository from './repositories/PersonRepository';
import ProductRepository from './repositories/ProductRepository';
import ContractRepository from './repositories/ContractRepository';
import EnvProfileRepository from './repositories/EnvProfileRepository';

// Sample Data
import { universities } from './data/universities';
import { persons, productCategories, products, contracts, envProfiles } from './data/sampleData';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Seed data
ClientRepository.seed(universities);
PersonRepository.seed(persons);
ProductRepository.seedCategories(productCategories);
ProductRepository.seedProducts(products);
ContractRepository.seed(contracts);
EnvProfileRepository.seed(envProfiles);

// Routes
app.use('/api', healthRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/persons', personsRouter);
app.use('/api/products', productsRouter);
app.use('/api/contracts', contractsRouter);
app.use('/api/stats', statsRouter);

app.listen(PORT, () => {
  console.log(`🚀 JABIS Backend Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

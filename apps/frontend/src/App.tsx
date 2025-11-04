import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { ContractList } from './pages/ContractList';
import { ContractDetail } from './pages/ContractDetail';
import { ContractNew } from './pages/ContractNew';
import { ProductList } from './pages/ProductList';
import { Masters } from './pages/Masters';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="contract" element={<ContractList />} />
          <Route path="contract/:id" element={<ContractDetail />} />
          <Route path="contract/new" element={<ContractNew />} />
          <Route path="product" element={<ProductList />} />
          <Route path="masters" element={<Masters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

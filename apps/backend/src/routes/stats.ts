import { Router, Request, Response } from 'express';
import ContractRepository from '../repositories/ContractRepository';
import ClientRepository from '../repositories/ClientRepository';

const router = Router();

// GET /api/stats/summary
router.get('/summary', (req: Request, res: Response) => {
  try {
    const contracts = ContractRepository.findAll();
    
    // 총 계약 수
    const totalContracts = contracts.length;
    
    // 총 매출액
    const totalRevenue = contracts.reduce((sum, contract) => sum + contract.finalPrice, 0);
    
    // 최근 5개 계약
    const recentContracts = contracts.slice(0, 5);
    
    // 지역별 매출액
    const revenueByRegion: { [region: string]: number } = {};
    contracts.forEach(contract => {
      const client = ClientRepository.findById(contract.clientId);
      if (client) {
        if (!revenueByRegion[client.region]) {
          revenueByRegion[client.region] = 0;
        }
        revenueByRegion[client.region] += contract.finalPrice;
      }
    });
    
    // 월별 매출액
    const revenueByMonth: { [month: string]: number } = {};
    contracts.forEach(contract => {
      const month = contract.contractDate.substring(0, 7); // YYYY-MM
      if (!revenueByMonth[month]) {
        revenueByMonth[month] = 0;
      }
      revenueByMonth[month] += contract.finalPrice;
    });
    
    res.json({
      totalContracts,
      totalRevenue,
      recentContracts,
      revenueByRegion,
      revenueByMonth
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

export default router;

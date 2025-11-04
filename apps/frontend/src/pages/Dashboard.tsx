import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { statsAPI, contractsAPI, clientsAPI } from '@/services/api';
import { StatsSummary, Contract, Client } from '@/types';
import { DollarSign, FileText, TrendingUp, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [stats, setStats] = useState<StatsSummary | null>(null);
  const [recentContractsWithClients, setRecentContractsWithClients] = useState<
    Array<Contract & { client?: Client }>
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [statsData, clients] = await Promise.all([
        statsAPI.getSummary(),
        clientsAPI.getAll(),
      ]);
      
      setStats(statsData);

      // 최근 계약에 클라이언트 정보 추가
      const contractsWithClients = statsData.recentContracts.map(contract => ({
        ...contract,
        client: clients.find(c => c.id === contract.clientId),
      }));
      setRecentContractsWithClients(contractsWithClients);
    } catch (error) {
      console.error('대시보드 데이터 로딩 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!stats) {
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">대시보드</h2>
        <p className="text-muted-foreground">시스템 전체 현황을 확인하세요</p>
      </div>

      {/* 주요 지표 카드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 계약 수</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalContracts}건</div>
            <p className="text-xs text-muted-foreground mt-1">
              전체 계약 건수
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 매출액</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              누적 매출액
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">평균 계약금액</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(stats.totalRevenue / stats.totalContracts)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              계약 당 평균 금액
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 지역별 매출액 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            지역별 매출액
          </CardTitle>
          <CardDescription>지역별 계약 금액 현황</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(stats.revenueByRegion)
              .sort(([, a], [, b]) => b - a)
              .map(([region, revenue]) => (
                <div key={region} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-medium">{region}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">{formatCurrency(revenue)}</span>
                    <span className="text-muted-foreground ml-2">
                      ({((revenue / stats.totalRevenue) * 100).toFixed(1)}%)
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* 월별 매출액 */}
      <Card>
        <CardHeader>
          <CardTitle>월별 매출액</CardTitle>
          <CardDescription>월별 계약 금액 추이</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(stats.revenueByMonth)
              .sort(([a], [b]) => b.localeCompare(a))
              .map(([month, revenue]) => (
                <div key={month} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="font-medium">{month}</span>
                  </div>
                  <span className="font-bold">{formatCurrency(revenue)}</span>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* 최근 계약 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 계약</CardTitle>
          <CardDescription>최근 5개 계약 건</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentContractsWithClients.map((contract) => (
              <Link
                key={contract.id}
                to={`/contract/${contract.id}`}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
              >
                <div className="space-y-1">
                  <p className="font-medium">{contract.client?.name || '알 수 없음'}</p>
                  <p className="text-sm text-muted-foreground">
                    {contract.contractDate} · {contract.products.length}개 제품
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{formatCurrency(contract.finalPrice)}</p>
                  {contract.discount > 0 && (
                    <p className="text-sm text-muted-foreground">
                      할인: {formatCurrency(contract.discount)}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

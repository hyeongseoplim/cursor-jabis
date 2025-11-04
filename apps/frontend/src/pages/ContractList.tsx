import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { contractsAPI, clientsAPI, personsAPI } from '@/services/api';
import { Contract, Client, Person } from '@/types';
import { Plus, Search } from 'lucide-react';

export function ContractList() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  // 필터
  const [selectedClient, setSelectedClient] = useState<string>('');
  const [selectedPerson, setSelectedPerson] = useState<string>('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    loadContracts();
  }, [selectedClient, selectedPerson, dateFrom, dateTo]);

  const loadInitialData = async () => {
    try {
      const [clientsData, personsData] = await Promise.all([
        clientsAPI.getAll(),
        personsAPI.getAll(),
      ]);
      setClients(clientsData);
      setPersons(personsData);
    } catch (error) {
      console.error('초기 데이터 로딩 실패:', error);
    }
  };

  const loadContracts = async () => {
    try {
      setLoading(true);
      const filters: any = {};
      if (selectedClient) filters.clientId = selectedClient;
      if (selectedPerson) filters.salesPersonId = selectedPerson;
      if (dateFrom) filters.from = dateFrom;
      if (dateTo) filters.to = dateTo;

      const data = await contractsAPI.getAll(filters);
      setContracts(data);
    } catch (error) {
      console.error('계약 목록 로딩 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const getClientName = (clientId: string) => {
    return clients.find(c => c.id === clientId)?.name || '알 수 없음';
  };

  const getPersonName = (personId: string) => {
    return persons.find(p => p.id === personId)?.name || '알 수 없음';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">계약 관리</h2>
          <p className="text-muted-foreground">대학별 계약 정보를 관리합니다</p>
        </div>
        <Link to="/contract/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            신규 계약
          </Button>
        </Link>
      </div>

      {/* 필터 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            검색 필터
          </CardTitle>
          <CardDescription>조건을 선택하여 계약을 검색하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">대학</label>
              <Select value={selectedClient} onValueChange={setSelectedClient}>
                <SelectTrigger>
                  <SelectValue placeholder="전체" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">전체</SelectItem>
                  {clients.map(client => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">영업 담당자</label>
              <Select value={selectedPerson} onValueChange={setSelectedPerson}>
                <SelectTrigger>
                  <SelectValue placeholder="전체" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">전체</SelectItem>
                  {persons.filter(p => p.department === 'sales').map(person => (
                    <SelectItem key={person.id} value={person.id}>
                      {person.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">시작일</label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">종료일</label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 계약 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>계약 목록</CardTitle>
          <CardDescription>총 {contracts.length}건의 계약</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div>로딩 중...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>계약일</TableHead>
                  <TableHead>대학명</TableHead>
                  <TableHead>영업 담당자</TableHead>
                  <TableHead>제품 수</TableHead>
                  <TableHead className="text-right">계약금액</TableHead>
                  <TableHead className="text-right">할인</TableHead>
                  <TableHead className="text-right">최종금액</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contracts.map((contract) => (
                  <TableRow key={contract.id}>
                    <TableCell>{contract.contractDate}</TableCell>
                    <TableCell>
                      <Link
                        to={`/contract/${contract.id}`}
                        className="font-medium hover:underline"
                      >
                        {getClientName(contract.clientId)}
                      </Link>
                    </TableCell>
                    <TableCell>{getPersonName(contract.salesPersonId)}</TableCell>
                    <TableCell>{contract.products.length}개</TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(contract.totalPrice)}
                    </TableCell>
                    <TableCell className="text-right text-destructive">
                      -{formatCurrency(contract.discount)}
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      {formatCurrency(contract.finalPrice)}
                    </TableCell>
                  </TableRow>
                ))}
                {contracts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-muted-foreground">
                      검색 결과가 없습니다
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { contractsAPI, clientsAPI, personsAPI, productsAPI } from '@/services/api';
import { Contract, Client, Person, Product, EnvProfile } from '@/types';
import { ArrowLeft, Building2, Users, Package, Server } from 'lucide-react';

export function ContractDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [contract, setContract] = useState<Contract | null>(null);
  const [client, setClient] = useState<Client | null>(null);
  const [persons, setPersons] = useState<{ [key: string]: Person }>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [envProfiles, setEnvProfiles] = useState<EnvProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadContractDetail();
    }
  }, [id]);

  const loadContractDetail = async () => {
    try {
      setLoading(true);
      const [contractData, allPersons, allProducts, envs] = await Promise.all([
        contractsAPI.getById(id!),
        personsAPI.getAll(),
        productsAPI.getAll(),
        contractsAPI.getEnvProfiles(id!),
      ]);

      setContract(contractData);
      setEnvProfiles(envs);

      // 클라이언트 정보
      const clientData = await clientsAPI.getById(contractData.clientId);
      setClient(clientData);

      // 담당자 정보
      const personMap: { [key: string]: Person } = {};
      [
        contractData.salesPersonId,
        contractData.operationsPersonId,
        contractData.developmentPersonId,
        contractData.solutionPersonId,
      ].forEach(personId => {
        const person = allPersons.find(p => p.id === personId);
        if (person) personMap[personId] = person;
      });
      setPersons(personMap);

      setProducts(allProducts);
    } catch (error) {
      console.error('계약 상세 정보 로딩 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!contract || !client) {
    return <div>계약 정보를 찾을 수 없습니다.</div>;
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ko-KR').format(amount) + '원';
  };

  const getProductName = (productId: string) => {
    return products.find(p => p.id === productId)?.name || '알 수 없음';
  };

  const departmentLabel: { [key: string]: string } = {
    sales: '영업부',
    operations: '운영부',
    development: '개발부',
    solution: '솔루션사업부',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/contract')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">계약 상세</h2>
          <p className="text-muted-foreground">{client.name} 계약 정보</p>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="basic">기본 정보</TabsTrigger>
          <TabsTrigger value="products">제품 정보</TabsTrigger>
          <TabsTrigger value="team">담당자</TabsTrigger>
          <TabsTrigger value="env">환경/서버</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                대학 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">대학명</p>
                  <p className="font-medium">{client.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">지역</p>
                  <p className="font-medium">{client.region}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">주소</p>
                  <p className="font-medium">{client.address}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">연락처</p>
                  <p className="font-medium">{client.contact}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>계약 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">계약일</p>
                  <p className="font-medium">{contract.contractDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">등록일</p>
                  <p className="font-medium">{new Date(contract.createdAt).toLocaleDateString('ko-KR')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">계약금액</p>
                  <p className="font-medium">{formatCurrency(contract.totalPrice)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">할인금액</p>
                  <p className="font-medium text-destructive">-{formatCurrency(contract.discount)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">최종금액</p>
                  <p className="text-lg font-bold text-primary">{formatCurrency(contract.finalPrice)}</p>
                </div>
              </div>
              {contract.note && (
                <div>
                  <p className="text-sm text-muted-foreground">비고</p>
                  <p className="font-medium">{contract.note}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                계약 제품 목록
              </CardTitle>
              <CardDescription>총 {contract.products.length}개 제품</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>제품명</TableHead>
                    <TableHead className="text-right">수량</TableHead>
                    <TableHead className="text-right">단가</TableHead>
                    <TableHead className="text-right">금액</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contract.products.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{getProductName(item.productId)}</TableCell>
                      <TableCell className="text-right">{item.quantity}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.price)}</TableCell>
                      <TableCell className="text-right font-medium">
                        {formatCurrency(item.price * item.quantity)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                담당자 정보
              </CardTitle>
              <CardDescription>부서별 담당자</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: contract.salesPersonId, label: '영업부' },
                  { id: contract.operationsPersonId, label: '운영부' },
                  { id: contract.developmentPersonId, label: '개발부' },
                  { id: contract.solutionPersonId, label: '솔루션사업부' },
                ].map(({ id, label }) => {
                  const person = persons[id];
                  return (
                    <div key={id} className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">{label}</p>
                      {person && (
                        <>
                          <p className="font-medium text-lg">{person.name}</p>
                          <p className="text-sm text-muted-foreground">{person.email}</p>
                          {person.phone && (
                            <p className="text-sm text-muted-foreground">{person.phone}</p>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="env">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                환경/서버 정보
              </CardTitle>
              <CardDescription>운영 환경 및 서버 정보</CardDescription>
            </CardHeader>
            <CardContent>
              {envProfiles.length > 0 ? (
                <div className="space-y-4">
                  {envProfiles.map((env) => (
                    <div key={env.id} className="p-4 border rounded-lg space-y-2">
                      <div className="grid grid-cols-2 gap-4">
                        {env.os && (
                          <div>
                            <p className="text-sm text-muted-foreground">운영체제</p>
                            <p className="font-medium">{env.os}</p>
                          </div>
                        )}
                        {env.framework && (
                          <div>
                            <p className="text-sm text-muted-foreground">프레임워크</p>
                            <p className="font-medium">{env.framework}</p>
                          </div>
                        )}
                        {env.db && (
                          <div>
                            <p className="text-sm text-muted-foreground">데이터베이스</p>
                            <p className="font-medium">{env.db}</p>
                          </div>
                        )}
                        {env.serverUrl && (
                          <div>
                            <p className="text-sm text-muted-foreground">서버 URL</p>
                            <p className="font-medium">{env.serverUrl}</p>
                          </div>
                        )}
                      </div>
                      {env.note && (
                        <div>
                          <p className="text-sm text-muted-foreground">비고</p>
                          <p className="font-medium">{env.note}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  등록된 환경 정보가 없습니다
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { clientsAPI, personsAPI } from '@/services/api';
import { Client, Person } from '@/types';
import { Building2, Users, Search } from 'lucide-react';

export function Masters() {
  const [clients, setClients] = useState<Client[]>([]);
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  const [clientSearch, setClientSearch] = useState('');
  const [personSearch, setPersonSearch] = useState('');

  useEffect(() => {
    loadMasterData();
  }, []);

  const loadMasterData = async () => {
    try {
      const [clientsData, personsData] = await Promise.all([
        clientsAPI.getAll(),
        personsAPI.getAll(),
      ]);
      setClients(clientsData);
      setPersons(personsData);
    } catch (error) {
      console.error('기본정보 로딩 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(clientSearch.toLowerCase()) ||
    client.region.toLowerCase().includes(clientSearch.toLowerCase()) ||
    client.address.toLowerCase().includes(clientSearch.toLowerCase())
  );

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(personSearch.toLowerCase()) ||
    person.email.toLowerCase().includes(personSearch.toLowerCase())
  );

  const departmentLabel: { [key: string]: string } = {
    sales: '영업부',
    operations: '운영부',
    development: '개발부',
    solution: '솔루션사업부',
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">기본정보 관리</h2>
        <p className="text-muted-foreground">대학 및 담당자 정보를 관리합니다</p>
      </div>

      <Tabs defaultValue="clients" className="space-y-4">
        <TabsList>
          <TabsTrigger value="clients">대학 정보</TabsTrigger>
          <TabsTrigger value="persons">담당자 정보</TabsTrigger>
        </TabsList>

        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                대학 목록
              </CardTitle>
              <CardDescription>총 {clients.length}개 대학</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="대학명, 지역, 주소로 검색..."
                    className="pl-10"
                    value={clientSearch}
                    onChange={(e) => setClientSearch(e.target.value)}
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>대학명</TableHead>
                    <TableHead>지역</TableHead>
                    <TableHead>주소</TableHead>
                    <TableHead>연락처</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="font-medium">{client.name}</TableCell>
                      <TableCell>{client.region}</TableCell>
                      <TableCell>{client.address}</TableCell>
                      <TableCell>{client.contact}</TableCell>
                    </TableRow>
                  ))}
                  {filteredClients.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground">
                        검색 결과가 없습니다
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="persons" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                담당자 목록
              </CardTitle>
              <CardDescription>총 {persons.length}명</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="이름, 이메일로 검색..."
                    className="pl-10"
                    value={personSearch}
                    onChange={(e) => setPersonSearch(e.target.value)}
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>이름</TableHead>
                    <TableHead>부서</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>연락처</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPersons.map((person) => (
                    <TableRow key={person.id}>
                      <TableCell className="font-medium">{person.name}</TableCell>
                      <TableCell>{departmentLabel[person.department]}</TableCell>
                      <TableCell>{person.email}</TableCell>
                      <TableCell>{person.phone || '-'}</TableCell>
                    </TableRow>
                  ))}
                  {filteredPersons.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground">
                        검색 결과가 없습니다
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

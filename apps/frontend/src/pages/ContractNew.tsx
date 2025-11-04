import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { contractsAPI, clientsAPI, personsAPI, productsAPI } from '@/services/api';
import { Client, Person, Product } from '@/types';
import { ArrowLeft } from 'lucide-react';

export function ContractNew() {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [persons, setPersons] = useState<Person[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [formData, setFormData] = useState({
    clientId: '',
    contractDate: new Date().toISOString().split('T')[0],
    salesPersonId: '',
    operationsPersonId: '',
    developmentPersonId: '',
    solutionPersonId: '',
    discount: 0,
    note: '',
  });

  const [selectedProducts, setSelectedProducts] = useState<Array<{ productId: string; quantity: number }>>([]);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const [clientsData, personsData, productsData] = await Promise.all([
        clientsAPI.getAll(),
        personsAPI.getAll(),
        productsAPI.getAll(),
      ]);
      setClients(clientsData);
      setPersons(personsData);
      setProducts(productsData);
    } catch (error) {
      console.error('초기 데이터 로딩 실패:', error);
    }
  };

  const addProduct = () => {
    setSelectedProducts([...selectedProducts, { productId: '', quantity: 1 }]);
  };

  const updateProduct = (index: number, field: 'productId' | 'quantity', value: string | number) => {
    const updated = [...selectedProducts];
    updated[index] = { ...updated[index], [field]: value };
    setSelectedProducts(updated);
  };

  const removeProduct = (index: number) => {
    setSelectedProducts(selectedProducts.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contractProducts = selectedProducts.map(sp => {
      const product = products.find(p => p.id === sp.productId);
      return {
        productId: sp.productId,
        quantity: sp.quantity,
        price: product?.price || 0,
      };
    });

    const totalPrice = contractProducts.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    const finalPrice = totalPrice - formData.discount;

    try {
      await contractsAPI.create({
        ...formData,
        products: contractProducts,
        totalPrice,
        finalPrice,
      });
      alert('계약이 등록되었습니다.');
      navigate('/contract');
    } catch (error) {
      console.error('계약 등록 실패:', error);
      alert('계약 등록에 실패했습니다.');
    }
  };

  const getPersonsByDepartment = (department: string) => {
    return persons.filter(p => p.department === department);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/contract')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">신규 계약 등록</h2>
          <p className="text-muted-foreground">새로운 대학 계약을 등록합니다</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>기본 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientId">대학명 *</Label>
                <Select
                  value={formData.clientId}
                  onValueChange={(value) => setFormData({ ...formData, clientId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="대학을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {clients.map(client => (
                      <SelectItem key={client.id} value={client.id}>
                        {client.name} ({client.region})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contractDate">계약일 *</Label>
                <Input
                  id="contractDate"
                  type="date"
                  value={formData.contractDate}
                  onChange={(e) => setFormData({ ...formData, contractDate: e.target.value })}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>담당자 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>영업 담당자 *</Label>
                <Select
                  value={formData.salesPersonId}
                  onValueChange={(value) => setFormData({ ...formData, salesPersonId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {getPersonsByDepartment('sales').map(person => (
                      <SelectItem key={person.id} value={person.id}>
                        {person.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>운영 담당자 *</Label>
                <Select
                  value={formData.operationsPersonId}
                  onValueChange={(value) => setFormData({ ...formData, operationsPersonId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {getPersonsByDepartment('operations').map(person => (
                      <SelectItem key={person.id} value={person.id}>
                        {person.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>개발 담당자 *</Label>
                <Select
                  value={formData.developmentPersonId}
                  onValueChange={(value) => setFormData({ ...formData, developmentPersonId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {getPersonsByDepartment('development').map(person => (
                      <SelectItem key={person.id} value={person.id}>
                        {person.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>솔루션사업부 담당자 *</Label>
                <Select
                  value={formData.solutionPersonId}
                  onValueChange={(value) => setFormData({ ...formData, solutionPersonId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {getPersonsByDepartment('solution').map(person => (
                      <SelectItem key={person.id} value={person.id}>
                        {person.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>제품 선택</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedProducts.map((sp, index) => (
              <div key={index} className="flex gap-4 items-end">
                <div className="flex-1 space-y-2">
                  <Label>제품</Label>
                  <Select
                    value={sp.productId}
                    onValueChange={(value) => updateProduct(index, 'productId', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="제품을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map(product => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name} ({new Intl.NumberFormat('ko-KR').format(product.price)}원)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-32 space-y-2">
                  <Label>수량</Label>
                  <Input
                    type="number"
                    min="1"
                    value={sp.quantity}
                    onChange={(e) => updateProduct(index, 'quantity', parseInt(e.target.value))}
                  />
                </div>
                <Button type="button" variant="destructive" onClick={() => removeProduct(index)}>
                  삭제
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addProduct}>
              제품 추가
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>가격 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="discount">할인금액</Label>
              <Input
                id="discount"
                type="number"
                min="0"
                value={formData.discount}
                onChange={(e) => setFormData({ ...formData, discount: parseInt(e.target.value) || 0 })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="note">비고</Label>
              <Input
                id="note"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="추가 메모사항"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => navigate('/contract')}>
            취소
          </Button>
          <Button type="submit">등록하기</Button>
        </div>
      </form>
    </div>
  );
}

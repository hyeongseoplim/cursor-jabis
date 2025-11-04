import { Person, ProductCategory, Product, Contract, EnvProfile } from '../types';

// 담당자 샘플 데이터
export const persons: Person[] = [
  // 영업부
  { id: 'person_001', name: '김영업', department: 'sales', email: 'kim.sales@jabis.com', phone: '010-1234-0001' },
  { id: 'person_002', name: '이세일', department: 'sales', email: 'lee.sales@jabis.com', phone: '010-1234-0002' },
  { id: 'person_003', name: '박마케팅', department: 'sales', email: 'park.sales@jabis.com', phone: '010-1234-0003' },
  { id: 'person_004', name: '최영업', department: 'sales', email: 'choi.sales@jabis.com', phone: '010-1234-0004' },
  { id: 'person_005', name: '정세일즈', department: 'sales', email: 'jung.sales@jabis.com', phone: '010-1234-0005' },
  
  // 운영부
  { id: 'person_006', name: '강운영', department: 'operations', email: 'kang.ops@jabis.com', phone: '010-2234-0001' },
  { id: 'person_007', name: '윤관리', department: 'operations', email: 'yoon.ops@jabis.com', phone: '010-2234-0002' },
  { id: 'person_008', name: '임운영', department: 'operations', email: 'lim.ops@jabis.com', phone: '010-2234-0003' },
  { id: 'person_009', name: '한관제', department: 'operations', email: 'han.ops@jabis.com', phone: '010-2234-0004' },
  { id: 'person_010', name: '신매니저', department: 'operations', email: 'shin.ops@jabis.com', phone: '010-2234-0005' },
  
  // 개발부
  { id: 'person_011', name: '권개발', department: 'development', email: 'kwon.dev@jabis.com', phone: '010-3234-0001' },
  { id: 'person_012', name: '송코딩', department: 'development', email: 'song.dev@jabis.com', phone: '010-3234-0002' },
  { id: 'person_013', name: '배프로그래머', department: 'development', email: 'bae.dev@jabis.com', phone: '010-3234-0003' },
  { id: 'person_014', name: '홍엔지니어', department: 'development', email: 'hong.dev@jabis.com', phone: '010-3234-0004' },
  { id: 'person_015', name: '조개발자', department: 'development', email: 'cho.dev@jabis.com', phone: '010-3234-0005' },
  
  // 솔루션사업부
  { id: 'person_016', name: '서솔루션', department: 'solution', email: 'seo.solution@jabis.com', phone: '010-4234-0001' },
  { id: 'person_017', name: '남사업', department: 'solution', email: 'nam.solution@jabis.com', phone: '010-4234-0002' },
  { id: 'person_018', name: '양컨설팅', department: 'solution', email: 'yang.solution@jabis.com', phone: '010-4234-0003' },
  { id: 'person_019', name: '전전략', department: 'solution', email: 'jeon.solution@jabis.com', phone: '010-4234-0004' },
  { id: 'person_020', name: '고비즈니스', department: 'solution', email: 'go.solution@jabis.com', phone: '010-4234-0005' }
];

// 제품 카테고리
export const productCategories: ProductCategory[] = [
  {
    id: 'category_001',
    name: '입학관리 솔루션',
    description: '입학 전형 관리 및 지원자 관리 시스템'
  },
  {
    id: 'category_002',
    name: '학사관리 솔루션',
    description: '수강신청, 성적관리, 졸업관리 시스템'
  },
  {
    id: 'category_003',
    name: '포털 솔루션',
    description: '대학 통합 포털 및 모바일 앱'
  },
  {
    id: 'category_004',
    name: '기숙사관리 솔루션',
    description: '기숙사 배정 및 생활 관리 시스템'
  },
  {
    id: 'category_005',
    name: '취업지원 솔루션',
    description: '취업 상담 및 채용 관리 시스템'
  }
];

// 제품
export const products: Product[] = [
  // 입학관리 솔루션
  {
    id: 'product_001',
    categoryId: 'category_001',
    name: '입학전형 관리 시스템',
    price: 50000000,
    description: '정시/수시 전형 관리 및 자동화'
  },
  {
    id: 'product_002',
    categoryId: 'category_001',
    name: '원서접수 시스템',
    price: 30000000,
    description: '온라인 원서 접수 및 결제 시스템'
  },
  {
    id: 'product_003',
    categoryId: 'category_001',
    name: '면접관리 시스템',
    price: 20000000,
    description: '면접 일정 관리 및 평가 시스템'
  },
  
  // 학사관리 솔루션
  {
    id: 'product_004',
    categoryId: 'category_002',
    name: '통합 학사관리 시스템',
    price: 80000000,
    description: '수강신청부터 졸업까지 통합 관리'
  },
  {
    id: 'product_005',
    categoryId: 'category_002',
    name: '성적관리 시스템',
    price: 35000000,
    description: '성적 입력, 조회, 통계 관리'
  },
  {
    id: 'product_006',
    categoryId: 'category_002',
    name: '수강신청 시스템',
    price: 40000000,
    description: '실시간 수강신청 및 대기 관리'
  },
  
  // 포털 솔루션
  {
    id: 'product_007',
    categoryId: 'category_003',
    name: '통합 포털 시스템',
    price: 100000000,
    description: 'PC/모바일 통합 포털'
  },
  {
    id: 'product_008',
    categoryId: 'category_003',
    name: '모바일 앱',
    price: 60000000,
    description: 'iOS/Android 네이티브 앱'
  },
  {
    id: 'product_009',
    categoryId: 'category_003',
    name: 'SSO 통합인증',
    price: 25000000,
    description: '단일 인증 시스템 구축'
  },
  
  // 기숙사관리 솔루션
  {
    id: 'product_010',
    categoryId: 'category_004',
    name: '기숙사 통합관리',
    price: 45000000,
    description: '입사 신청부터 생활 관리까지'
  },
  {
    id: 'product_011',
    categoryId: 'category_004',
    name: '시설 예약 시스템',
    price: 15000000,
    description: '세미나실, 체육시설 예약 관리'
  },
  
  // 취업지원 솔루션
  {
    id: 'product_012',
    categoryId: 'category_005',
    name: '취업상담 시스템',
    price: 30000000,
    description: '진로 상담 및 이력서 관리'
  },
  {
    id: 'product_013',
    categoryId: 'category_005',
    name: '채용공고 관리',
    price: 20000000,
    description: '기업 채용 정보 매칭'
  }
];

// 샘플 계약 10개
export const contracts: Contract[] = [
  {
    id: 'contract_001',
    clientId: 'univ_001',
    contractDate: '2024-01-15',
    salesPersonId: 'person_001',
    operationsPersonId: 'person_006',
    developmentPersonId: 'person_011',
    solutionPersonId: 'person_016',
    products: [
      { productId: 'product_001', quantity: 1, price: 50000000 },
      { productId: 'product_002', quantity: 1, price: 30000000 }
    ],
    totalPrice: 80000000,
    discount: 5000000,
    finalPrice: 75000000,
    note: '서울대학교 입학관리 솔루션 구축',
    createdAt: '2024-01-15T09:00:00Z'
  },
  {
    id: 'contract_002',
    clientId: 'univ_002',
    contractDate: '2024-02-20',
    salesPersonId: 'person_002',
    operationsPersonId: 'person_007',
    developmentPersonId: 'person_012',
    solutionPersonId: 'person_017',
    products: [
      { productId: 'product_004', quantity: 1, price: 80000000 },
      { productId: 'product_007', quantity: 1, price: 100000000 }
    ],
    totalPrice: 180000000,
    discount: 15000000,
    finalPrice: 165000000,
    note: '연세대학교 학사관리 및 포털 통합 구축',
    createdAt: '2024-02-20T10:30:00Z'
  },
  {
    id: 'contract_003',
    clientId: 'univ_003',
    contractDate: '2024-03-10',
    salesPersonId: 'person_003',
    operationsPersonId: 'person_008',
    developmentPersonId: 'person_013',
    solutionPersonId: 'person_018',
    products: [
      { productId: 'product_007', quantity: 1, price: 100000000 },
      { productId: 'product_008', quantity: 1, price: 60000000 }
    ],
    totalPrice: 160000000,
    discount: 10000000,
    finalPrice: 150000000,
    note: '고려대학교 통합 포털 및 모바일 앱 구축',
    createdAt: '2024-03-10T14:00:00Z'
  },
  {
    id: 'contract_004',
    clientId: 'univ_026',
    contractDate: '2024-04-05',
    salesPersonId: 'person_004',
    operationsPersonId: 'person_009',
    developmentPersonId: 'person_014',
    solutionPersonId: 'person_019',
    products: [
      { productId: 'product_004', quantity: 1, price: 80000000 },
      { productId: 'product_010', quantity: 1, price: 45000000 }
    ],
    totalPrice: 125000000,
    discount: 8000000,
    finalPrice: 117000000,
    note: '아주대학교 학사관리 및 기숙사 시스템',
    createdAt: '2024-04-05T11:20:00Z'
  },
  {
    id: 'contract_005',
    clientId: 'univ_053',
    contractDate: '2024-05-12',
    salesPersonId: 'person_005',
    operationsPersonId: 'person_010',
    developmentPersonId: 'person_015',
    solutionPersonId: 'person_020',
    products: [
      { productId: 'product_001', quantity: 1, price: 50000000 },
      { productId: 'product_002', quantity: 1, price: 30000000 },
      { productId: 'product_003', quantity: 1, price: 20000000 }
    ],
    totalPrice: 100000000,
    discount: 7000000,
    finalPrice: 93000000,
    note: '부산대학교 입학관리 통합 솔루션',
    createdAt: '2024-05-12T09:45:00Z'
  },
  {
    id: 'contract_006',
    clientId: 'univ_041',
    contractDate: '2024-06-18',
    salesPersonId: 'person_001',
    operationsPersonId: 'person_006',
    developmentPersonId: 'person_011',
    solutionPersonId: 'person_016',
    products: [
      { productId: 'product_006', quantity: 1, price: 40000000 },
      { productId: 'product_005', quantity: 1, price: 35000000 }
    ],
    totalPrice: 75000000,
    discount: 5000000,
    finalPrice: 70000000,
    note: '충남대학교 수강신청 및 성적관리',
    createdAt: '2024-06-18T13:10:00Z'
  },
  {
    id: 'contract_007',
    clientId: 'univ_073',
    contractDate: '2024-07-22',
    salesPersonId: 'person_002',
    operationsPersonId: 'person_007',
    developmentPersonId: 'person_012',
    solutionPersonId: 'person_017',
    products: [
      { productId: 'product_012', quantity: 1, price: 30000000 },
      { productId: 'product_013', quantity: 1, price: 20000000 }
    ],
    totalPrice: 50000000,
    discount: 3000000,
    finalPrice: 47000000,
    note: '전남대학교 취업지원 솔루션',
    createdAt: '2024-07-22T10:00:00Z'
  },
  {
    id: 'contract_008',
    clientId: 'univ_079',
    contractDate: '2024-08-15',
    salesPersonId: 'person_003',
    operationsPersonId: 'person_008',
    developmentPersonId: 'person_013',
    solutionPersonId: 'person_018',
    products: [
      { productId: 'product_007', quantity: 1, price: 100000000 },
      { productId: 'product_009', quantity: 1, price: 25000000 }
    ],
    totalPrice: 125000000,
    discount: 10000000,
    finalPrice: 115000000,
    note: '전북대학교 통합 포털 및 SSO 구축',
    createdAt: '2024-08-15T15:30:00Z'
  },
  {
    id: 'contract_009',
    clientId: 'univ_036',
    contractDate: '2024-09-10',
    salesPersonId: 'person_004',
    operationsPersonId: 'person_009',
    developmentPersonId: 'person_014',
    solutionPersonId: 'person_019',
    products: [
      { productId: 'product_010', quantity: 1, price: 45000000 },
      { productId: 'product_011', quantity: 1, price: 15000000 }
    ],
    totalPrice: 60000000,
    discount: 4000000,
    finalPrice: 56000000,
    note: '강원대학교 기숙사 통합관리',
    createdAt: '2024-09-10T11:50:00Z'
  },
  {
    id: 'contract_010',
    clientId: 'univ_084',
    contractDate: '2024-10-25',
    salesPersonId: 'person_005',
    operationsPersonId: 'person_010',
    developmentPersonId: 'person_015',
    solutionPersonId: 'person_020',
    products: [
      { productId: 'product_004', quantity: 1, price: 80000000 },
      { productId: 'product_008', quantity: 1, price: 60000000 }
    ],
    totalPrice: 140000000,
    discount: 12000000,
    finalPrice: 128000000,
    note: '제주대학교 학사관리 및 모바일 앱',
    createdAt: '2024-10-25T09:15:00Z'
  }
];

// 환경 프로필 샘플
export const envProfiles: EnvProfile[] = [
  {
    id: 'env_001',
    contractId: 'contract_001',
    os: 'Ubuntu 22.04 LTS',
    framework: 'Spring Boot 3.2',
    db: 'PostgreSQL 15',
    serverUrl: 'https://admission.snu.ac.kr',
    note: '서울대 입학관리 운영 서버'
  },
  {
    id: 'env_002',
    contractId: 'contract_002',
    os: 'CentOS 8',
    framework: 'Spring Boot 3.1, React 18',
    db: 'Oracle 19c',
    serverUrl: 'https://portal.yonsei.ac.kr',
    note: '연세대 통합 포털 운영 서버'
  },
  {
    id: 'env_003',
    contractId: 'contract_003',
    os: 'Ubuntu 22.04 LTS',
    framework: 'Next.js 14, Node.js 20',
    db: 'MySQL 8.0',
    serverUrl: 'https://portal.korea.ac.kr',
    note: '고려대 포털 운영 서버'
  }
];

import { Client } from '../types';

// 대한민국 주요 대학교 샘플 데이터
export const universities: Client[] = [
  {
    id: 'univ_001',
    name: '서울대학교',
    region: '서울',
    address: '서울특별시 관악구 관악로 1',
    contact: '02-880-5114'
  },
  {
    id: 'univ_002',
    name: '연세대학교',
    region: '서울',
    address: '서울특별시 서대문구 연세로 50',
    contact: '02-2123-2000'
  },
  {
    id: 'univ_003',
    name: '고려대학교',
    region: '서울',
    address: '서울특별시 성북구 안암로 145',
    contact: '02-3290-1114'
  },
  {
    id: 'univ_004',
    name: '한양대학교',
    region: '서울',
    address: '서울특별시 성동구 왕십리로 222',
    contact: '02-2220-0114'
  },
  {
    id: 'univ_005',
    name: '성균관대학교',
    region: '서울',
    address: '서울특별시 종로구 성균관로 25-2',
    contact: '02-760-1114'
  },
  {
    id: 'univ_006',
    name: '경희대학교',
    region: '서울',
    address: '서울특별시 동대문구 경희대로 26',
    contact: '02-961-0114'
  },
  {
    id: 'univ_007',
    name: '중앙대학교',
    region: '서울',
    address: '서울특별시 동작구 흑석로 84',
    contact: '02-820-5114'
  },
  {
    id: 'univ_008',
    name: '서강대학교',
    region: '서울',
    address: '서울특별시 마포구 백범로 35',
    contact: '02-705-8114'
  },
  {
    id: 'univ_009',
    name: '이화여자대학교',
    region: '서울',
    address: '서울특별시 서대문구 이화여대길 52',
    contact: '02-3277-2114'
  },
  {
    id: 'univ_010',
    name: '한국외국어대학교',
    region: '서울',
    address: '서울특별시 동대문구 이문로 107',
    contact: '02-2173-2114'
  },
  {
    id: 'univ_011',
    name: '건국대학교',
    region: '서울',
    address: '서울특별시 광진구 능동로 120',
    contact: '02-450-3114'
  },
  {
    id: 'univ_012',
    name: '동국대학교',
    region: '서울',
    address: '서울특별시 중구 필동로 1길 30',
    contact: '02-2260-3114'
  },
  {
    id: 'univ_013',
    name: '숙명여자대학교',
    region: '서울',
    address: '서울특별시 용산구 청파로47길 100',
    contact: '02-710-9114'
  },
  {
    id: 'univ_014',
    name: '서울시립대학교',
    region: '서울',
    address: '서울특별시 동대문구 서울시립대로 163',
    contact: '02-6490-6114'
  },
  {
    id: 'univ_015',
    name: '홍익대학교',
    region: '서울',
    address: '서울특별시 마포구 와우산로 94',
    contact: '02-320-1114'
  },
  {
    id: 'univ_016',
    name: '국민대학교',
    region: '서울',
    address: '서울특별시 성북구 정릉로 77',
    contact: '02-910-4114'
  },
  {
    id: 'univ_017',
    name: '세종대학교',
    region: '서울',
    address: '서울특별시 광진구 능동로 209',
    contact: '02-3408-3114'
  },
  {
    id: 'univ_018',
    name: '광운대학교',
    region: '서울',
    address: '서울특별시 노원구 광운로 20',
    contact: '02-940-5114'
  },
  {
    id: 'univ_019',
    name: '숭실대학교',
    region: '서울',
    address: '서울특별시 동작구 상도로 369',
    contact: '02-820-0114'
  },
  {
    id: 'univ_020',
    name: '가톨릭대학교',
    region: '서울',
    address: '서울특별시 서초구 반포대로 222',
    contact: '02-2258-7111'
  },
  {
    id: 'univ_021',
    name: '인천대학교',
    region: '인천',
    address: '인천광역시 연수구 아카데미로 119',
    contact: '032-835-8114'
  },
  {
    id: 'univ_022',
    name: '경인교육대학교',
    region: '인천',
    address: '인천광역시 계양구 계산로 62',
    contact: '032-540-1114'
  },
  {
    id: 'univ_023',
    name: '인하대학교',
    region: '인천',
    address: '인천광역시 미추홀구 인하로 100',
    contact: '032-860-7114'
  },
  {
    id: 'univ_024',
    name: '가천대학교',
    region: '인천',
    address: '인천광역시 연수구 함박뫼로 191',
    contact: '032-820-4114'
  },
  {
    id: 'univ_025',
    name: '한양대학교(ERICA)',
    region: '경기',
    address: '경기도 안산시 상록구 한양대학로 55',
    contact: '031-400-5114'
  },
  {
    id: 'univ_026',
    name: '아주대학교',
    region: '경기',
    address: '경기도 수원시 영통구 월드컵로 206',
    contact: '031-219-2114'
  },
  {
    id: 'univ_027',
    name: '경기대학교',
    region: '경기',
    address: '경기도 수원시 영통구 광교산로 154-42',
    contact: '031-249-9114'
  },
  {
    id: 'univ_028',
    name: '단국대학교',
    region: '경기',
    address: '경기도 용인시 수지구 죽전로 152',
    contact: '031-8005-2114'
  },
  {
    id: 'univ_029',
    name: '명지대학교',
    region: '경기',
    address: '경기도 용인시 처인구 명지로 116',
    contact: '031-330-6114'
  },
  {
    id: 'univ_030',
    name: '경희대학교(국제캠퍼스)',
    region: '경기',
    address: '경기도 용인시 기흥구 덕영대로 1732',
    contact: '031-201-2114'
  },
  {
    id: 'univ_031',
    name: '한국외국어대학교(글로벌캠퍼스)',
    region: '경기',
    address: '경기도 용인시 처인구 모현읍 외대로 81',
    contact: '031-330-4114'
  },
  {
    id: 'univ_032',
    name: '성균관대학교(자연과학캠퍼스)',
    region: '경기',
    address: '경기도 수원시 장안구 서부로 2066',
    contact: '031-290-5114'
  },
  {
    id: 'univ_033',
    name: '중앙대학교(안성캠퍼스)',
    region: '경기',
    address: '경기도 안성시 대덕면 서동대로 4726',
    contact: '031-670-3114'
  },
  {
    id: 'univ_034',
    name: '동국대학교(바이오메디캠퍼스)',
    region: '경기',
    address: '경기도 고양시 일산동구 동국로 32',
    contact: '031-961-5114'
  },
  {
    id: 'univ_035',
    name: '한국항공대학교',
    region: '경기',
    address: '경기도 고양시 덕양구 항공대학로 76',
    contact: '02-300-0114'
  },
  {
    id: 'univ_036',
    name: '강원대학교',
    region: '강원',
    address: '강원특별자치도 춘천시 강원대학길 1',
    contact: '033-250-6114'
  },
  {
    id: 'univ_037',
    name: '한림대학교',
    region: '강원',
    address: '강원특별자치도 춘천시 한림대학길 1',
    contact: '033-248-1000'
  },
  {
    id: 'univ_038',
    name: '상지대학교',
    region: '강원',
    address: '강원특별자치도 원주시 상지대길 83',
    contact: '033-730-0114'
  },
  {
    id: 'univ_039',
    name: '연세대학교(미래캠퍼스)',
    region: '강원',
    address: '강원특별자치도 원주시 연세대길 1',
    contact: '033-760-2114'
  },
  {
    id: 'univ_040',
    name: '가톨릭관동대학교',
    region: '강원',
    address: '강원특별자치도 강릉시 범일로 579번길 24',
    contact: '033-649-7114'
  },
  {
    id: 'univ_041',
    name: '충남대학교',
    region: '대전',
    address: '대전광역시 유성구 대학로 99',
    contact: '042-821-5114'
  },
  {
    id: 'univ_042',
    name: '한밭대학교',
    region: '대전',
    address: '대전광역시 유성구 동서대로 125',
    contact: '042-821-1114'
  },
  {
    id: 'univ_043',
    name: '목원대학교',
    region: '대전',
    address: '대전광역시 서구 도안북로 88',
    contact: '042-829-7114'
  },
  {
    id: 'univ_044',
    name: '배재대학교',
    region: '대전',
    address: '대전광역시 서구 배재로 155-40',
    contact: '042-520-5114'
  },
  {
    id: 'univ_045',
    name: '충북대학교',
    region: '충북',
    address: '충청북도 청주시 서원구 충대로 1',
    contact: '043-261-2114'
  },
  {
    id: 'univ_046',
    name: '청주대학교',
    region: '충북',
    address: '충청북도 청주시 청원구 대성로 298',
    contact: '043-229-8114'
  },
  {
    id: 'univ_047',
    name: '한국교통대학교',
    region: '충북',
    address: '충청북도 충주시 대학로 50',
    contact: '043-841-5114'
  },
  {
    id: 'univ_048',
    name: '건국대학교(글로컬캠퍼스)',
    region: '충북',
    address: '충청북도 충주시 충원대로 268',
    contact: '043-840-3114'
  },
  {
    id: 'univ_049',
    name: '공주대학교',
    region: '충남',
    address: '충청남도 공주시 공주대학로 56',
    contact: '041-850-8114'
  },
  {
    id: 'univ_050',
    name: '한서대학교',
    region: '충남',
    address: '충청남도 서산시 해미면 한서1로 46',
    contact: '041-660-1114'
  },
  {
    id: 'univ_051',
    name: '선문대학교',
    region: '충남',
    address: '충청남도 아산시 탕정면 선문로 221',
    contact: '041-530-2114'
  },
  {
    id: 'univ_052',
    name: '순천향대학교',
    region: '충남',
    address: '충청남도 아산시 신창면 순천향로 22',
    contact: '041-530-1114'
  },
  {
    id: 'univ_053',
    name: '부산대학교',
    region: '부산',
    address: '부산광역시 금정구 부산대학로63번길 2',
    contact: '051-510-1114'
  },
  {
    id: 'univ_054',
    name: '동아대학교',
    region: '부산',
    address: '부산광역시 서구 구덕로 225',
    contact: '051-200-6114'
  },
  {
    id: 'univ_055',
    name: '부경대학교',
    region: '부산',
    address: '부산광역시 남구 용소로 45',
    contact: '051-629-5114'
  },
  {
    id: 'univ_056',
    name: '동의대학교',
    region: '부산',
    address: '부산광역시 부산진구 엄광로 176',
    contact: '051-890-1114'
  },
  {
    id: 'univ_057',
    name: '신라대학교',
    region: '부산',
    address: '부산광역시 사상구 백양대로 700번길 140',
    contact: '051-999-5114'
  },
  {
    id: 'univ_058',
    name: '부산외국어대학교',
    region: '부산',
    address: '부산광역시 금정구 금샘로 485번길 65',
    contact: '051-509-5114'
  },
  {
    id: 'univ_059',
    name: '경성대학교',
    region: '부산',
    address: '부산광역시 남구 수영로 309',
    contact: '051-663-4114'
  },
  {
    id: 'univ_060',
    name: '경남대학교',
    region: '경남',
    address: '경상남도 창원시 마산합포구 경남대학로 7',
    contact: '055-249-2114'
  },
  {
    id: 'univ_061',
    name: '창원대학교',
    region: '경남',
    address: '경상남도 창원시 의창구 창원대학로 20',
    contact: '055-213-2114'
  },
  {
    id: 'univ_062',
    name: '경상국립대학교',
    region: '경남',
    address: '경상남도 진주시 진주대로 501',
    contact: '055-772-0114'
  },
  {
    id: 'univ_063',
    name: '인제대학교',
    region: '경남',
    address: '경상남도 김해시 인제로 197',
    contact: '055-320-3114'
  },
  {
    id: 'univ_064',
    name: '울산대학교',
    region: '울산',
    address: '울산광역시 남구 대학로 93',
    contact: '052-259-2114'
  },
  {
    id: 'univ_065',
    name: '울산과학기술원',
    region: '울산',
    address: '울산광역시 울주군 언양읍 유니스트길 50',
    contact: '052-217-0114'
  },
  {
    id: 'univ_066',
    name: '경북대학교',
    region: '대구',
    address: '대구광역시 북구 대학로 80',
    contact: '053-950-5114'
  },
  {
    id: 'univ_067',
    name: '계명대학교',
    region: '대구',
    address: '대구광역시 달서구 달구벌대로 1095',
    contact: '053-580-5114'
  },
  {
    id: 'univ_068',
    name: '대구가톨릭대학교',
    region: '대구',
    address: '대구광역시 경산시 하양읍 하양로 13-13',
    contact: '053-850-3114'
  },
  {
    id: 'univ_069',
    name: '영남대학교',
    region: '대구',
    address: '대구광역시 경산시 대학로 280',
    contact: '053-810-1114'
  },
  {
    id: 'univ_070',
    name: '동국대학교(경주캠퍼스)',
    region: '경북',
    address: '경상북도 경주시 동대로 123',
    contact: '054-770-2114'
  },
  {
    id: 'univ_071',
    name: '안동대학교',
    region: '경북',
    address: '경상북도 안동시 경동로 1375',
    contact: '054-820-5114'
  },
  {
    id: 'univ_072',
    name: '금오공과대학교',
    region: '경북',
    address: '경상북도 구미시 대학로 61',
    contact: '054-478-7114'
  },
  {
    id: 'univ_073',
    name: '전남대학교',
    region: '광주',
    address: '광주광역시 북구 용봉로 77',
    contact: '062-530-5114'
  },
  {
    id: 'univ_074',
    name: '조선대학교',
    region: '광주',
    address: '광주광역시 동구 필문대로 309',
    contact: '062-230-6114'
  },
  {
    id: 'univ_075',
    name: '광주대학교',
    region: '광주',
    address: '광주광역시 남구 효덕로 277',
    contact: '062-670-2114'
  },
  {
    id: 'univ_076',
    name: '호남대학교',
    region: '광주',
    address: '광주광역시 광산구 호남대학로 120',
    contact: '062-940-5114'
  },
  {
    id: 'univ_077',
    name: '목포대학교',
    region: '전남',
    address: '전라남도 무안군 청계면 영산로 1666',
    contact: '061-450-2114'
  },
  {
    id: 'univ_078',
    name: '순천대학교',
    region: '전남',
    address: '전라남도 순천시 중앙로 255',
    contact: '061-750-3114'
  },
  {
    id: 'univ_079',
    name: '전북대학교',
    region: '전북',
    address: '전북특별자치도 전주시 덕진구 백제대로 567',
    contact: '063-270-2114'
  },
  {
    id: 'univ_080',
    name: '우석대학교',
    region: '전북',
    address: '전북특별자치도 완주군 삼례읍 삼례로 443',
    contact: '063-290-1114'
  },
  {
    id: 'univ_081',
    name: '원광대학교',
    region: '전북',
    address: '전북특별자치도 익산시 익산대로 460',
    contact: '063-850-5114'
  },
  {
    id: 'univ_082',
    name: '군산대학교',
    region: '전북',
    address: '전북특별자치도 군산시 대학로 558',
    contact: '063-469-4114'
  },
  {
    id: 'univ_083',
    name: '전주대학교',
    region: '전북',
    address: '전북특별자치도 전주시 완산구 천잠로 303',
    contact: '063-220-2114'
  },
  {
    id: 'univ_084',
    name: '제주대학교',
    region: '제주',
    address: '제주특별자치도 제주시 제주대학로 102',
    contact: '064-754-2114'
  },
  {
    id: 'univ_085',
    name: '한국해양대학교',
    region: '부산',
    address: '부산광역시 영도구 태종로 727',
    contact: '051-410-4114'
  },
  {
    id: 'univ_086',
    name: '한국산업기술대학교',
    region: '경기',
    address: '경기도 시흥시 산기대학로 237',
    contact: '031-8041-0114'
  },
  {
    id: 'univ_087',
    name: '한국기술교육대학교',
    region: '충남',
    address: '충청남도 천안시 동남구 병천면 충절로 1600',
    contact: '041-560-1114'
  },
  {
    id: 'univ_088',
    name: '서울과학기술대학교',
    region: '서울',
    address: '서울특별시 노원구 공릉로 232',
    contact: '02-970-6114'
  },
  {
    id: 'univ_089',
    name: '한국체육대학교',
    region: '서울',
    address: '서울특별시 송파구 올림픽로 1239',
    contact: '02-410-6114'
  },
  {
    id: 'univ_090',
    name: '포항공과대학교',
    region: '경북',
    address: '경상북도 포항시 남구 청암로 77',
    contact: '054-279-2114'
  },
  {
    id: 'univ_091',
    name: '한국과학기술원',
    region: '대전',
    address: '대전광역시 유성구 대학로 291',
    contact: '042-350-2114'
  },
  {
    id: 'univ_092',
    name: '광주과학기술원',
    region: '광주',
    address: '광주광역시 북구 첨단과기로 123',
    contact: '062-715-2114'
  },
  {
    id: 'univ_093',
    name: '대구경북과학기술원',
    region: '대구',
    address: '대구광역시 달성군 현풍읍 테크노중앙대로 333',
    contact: '053-785-5114'
  },
  {
    id: 'univ_094',
    name: '서울교육대학교',
    region: '서울',
    address: '서울특별시 서초구 서초중앙로 96',
    contact: '02-3475-2114'
  },
  {
    id: 'univ_095',
    name: '경인교육대학교',
    region: '경기',
    address: '경기도 안양시 만안구 삼막로 155',
    contact: '031-470-6114'
  },
  {
    id: 'univ_096',
    name: '춘천교육대학교',
    region: '강원',
    address: '강원특별자치도 춘천시 강원대학길 1',
    contact: '033-260-6114'
  },
  {
    id: 'univ_097',
    name: '청주교육대학교',
    region: '충북',
    address: '충청북도 청주시 흥덕구 강내면 태성탑연로 250',
    contact: '043-299-0114'
  },
  {
    id: 'univ_098',
    name: '공주교육대학교',
    region: '충남',
    address: '충청남도 공주시 웅진로 27',
    contact: '041-850-1114'
  },
  {
    id: 'univ_099',
    name: '부산교육대학교',
    region: '부산',
    address: '부산광역시 연제구 교대로 24',
    contact: '051-500-7114'
  },
  {
    id: 'univ_100',
    name: '대구교육대학교',
    region: '대구',
    address: '대구광역시 남구 중앙대로 219',
    contact: '053-620-1114'
  }
];

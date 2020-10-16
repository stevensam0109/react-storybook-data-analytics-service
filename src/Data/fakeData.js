export const subjects = [
  'Agriculture',
  'Business and consumer services and culture',
  'Business performance and ownership',
  'Children and youth',
  'Construction',
  'Crime and justice',
  'Econmic accounts',
  'Education, training and learning',
  'Energy',
  'Environment',
  'Families and households',
  'Government',
  'Health',
  'Housing',
  'Immigration and ethnocultural diversity',
  'Income, pensions, spending and wealth',
];

export const suggestions = [
  {subject: 'Agriculture'},
  {subject: 'Business and consumer services and culture'},
  {subject: 'Business performance and ownership'},
  {subject: 'Children and youth'},
  {subject: 'Crime and justice'},
  {subject: 'Econmic accounts'},
  {subject: 'Education, training and learning'},
  {subject: 'Energy'},
  {subject: 'Environment'},
  {subject: 'Families and households'},
  {subject: 'Government'},
  {subject: 'Health'},
  {subject: 'Housing'},
  {subject: 'Immigration and ethnocultural diversity'},
  {subject: 'Income, pensions, spending and wealth'},
];

export const surveys = [
  'Accounting Services Price Report',
  'Air Passenger Origin and Destination, Domestic Journeys (POD)',
  'Air Passenger Origin and Destination, Canada-U.S.A. (POD)',
  'Airport Activity Survey',
  'Annual Capital and Repair Expenditures Survey: Actual, Preliminary and Intentions',
  'Architectural, Engineering and Related Services Price Index (AESPI)',
  'Asphalt Roofing',
  'Building Construction Price Index (BCPI)',
  'Building Permits (BPER)',
  'Business Payrolls Survey (BPS)',
  'Business Register',
];

export const articles = [
  {
    img: process.env.PUBLIC_URL + '/images/analysis.jpg',
    title: 'Consumer Price Index',
    description:
      'The Consumer Price Index (CPI) rose 2.4% on a year-over-year basis in January, up from a 2.2% gain in December. Excluding gasoline, the CPI rose 2.0% in January. On a seasonally adjusted monthly basis, the CPI rose 0.1% in January, following a 0.4% increase in December.',
    date: 'January 2020',
    subjects: ['Prices and price indexes', 'Consumer price indexes'],
    link: 'https://www150.statcan.gc.ca/n1/daily-quotidien/200219/dq200219a-eng.htm?indid=3665-1&indgeo=0',
  },
  {
    img: process.env.PUBLIC_URL + '/images/retail-trade.jpeg',
    title: 'Retail trade',
    description:
      'Retail sales were virtually unchanged at $51.6 billion in December, after growing 1.1% in November. Higher sales at building material and garden equipment and supplies dealers, as well as food and beverage stores were more than offset by lower sales at motor vehicle and parts dealers and gasoline stations. Sales were up in 7 of 11 subsectors, representing 49% of retail trade.',
    date: 'December 2019',
    subjects: ['Retail and wholesale', 'Retail sales by type of store'],
    link: 'https://www150.statcan.gc.ca/n1/daily-quotidien/200221/dq200221a-eng.htm',
  },
  {
    img: process.env.PUBLIC_URL + '/images/containers.jpg',
    title: 'Canadian international trade in services',
    description:
      'In December, Canada\'s monthly deficit in international trade in services narrowed by $153 million to $1.3 billion. The decreasing deficit was mainly due to a higher surplus for commercial services. Imports of services declined $89 million to $12.8 billion in December, the result of lower payments for commercial services. Exports increased $65 million to $11.5 billion, as travel services, commercial services, and transportation services all posted modest gains.',
    date: 'December 2019',
    subjects: ['International trade', 'Service imports and exports', 'Economic accounts', ' International accounts', 'Balance of international payments', ' International trade in services'],
    link: 'https://www150.statcan.gc.ca/n1/daily-quotidien/200205/dq200205b-eng.htm',
  },
  {
    img: process.env.PUBLIC_URL + '/images/labour.jpg',
    title: 'Labour Force Survey',
    description:
      'Employment increased by 35,000 (+0.2%) in January, all in full-time work. The unemployment rate fell 0.1 percentage points to 5.5%. The additional employment in January contributed to gains totalling 268,000 (+1.4%) since January 2019. All of this increase was the result of growth in full-time employment. Over the same period, total hours worked increased 0.5%.',
    date: 'January 2020',
    subjects: ['Labour', 'Employment and unemployment', 'Labour force characteristics'],
    link: 'https://www150.statcan.gc.ca/n1/daily-quotidien/200207/dq200207a-eng.htm',
  },
  {
    img: process.env.PUBLIC_URL + '/images/toronto.jpg',
    title: 'New Housing Price Index',
    description:
      'New house prices were unchanged in January, following a 0.2% rise in December.',
    date: 'January 2020',
    subjects: ['Prices and price indexes', 'Producer price indexes', 'Housing and construction price indexes', 'Housing', 'Housing price indexes'],
    link: 'https://www150.statcan.gc.ca/n1/daily-quotidien/200220/dq200220b-eng.htm',
  },
];

export const datasets = [
  {
    id: '0220-000001',
    title: 'Labour Force Survey',
    abstract:
      'LFS data are used to produce the well-known unemployment rate as well as other standard labour market indicators such as the employment rate and the participation rate. The LFS also provides employment estimates by industry, occupation, public and private sector, hours worked and much more, all cross-classifiable by a variety of demographic characteristics. Estimates are produced for Canada, the provinces, the territories and a large number of sub-provincial regions. For employees, data on wage rates, union status, job permanency and establishment size are also produced.\nThese data are used by different levels of government for evaluation and planning of employment programs in Canada. Regional unemployment rates are used by Employment and Social Development Canada to determine eligibility, level and duration of insurance benefits for persons living within a particular employment insurance region. The data are also used by labour market analysts, economists, consultants, planners, forecasters and academics in both the private and public sector.',
    dateReleased: '2020-01-01',
    provider: 'Statistics Canada',
    subjects: [
      'Employment and unemployment',
      'Hours of work and work arrangements',
      'Industries',
      'Labour',
      'Occupations',
      'Unionization and industrial relations',
      'Wages, salaries and other earnings',
    ],
    type: 'Public dataset',
  },
  {
    id: '71-607-X2019001',
    title: 'Energy statistics: Interactive dashboard',
    abstract:
      'This interactive data visualization dashboard provides a comprehensive picture of the Canadian energy sector with a focus on monthly statistics. Users will find an extensive coverage of energy statistics from a variety of Statistics Canada data sources. The dashboard currently features energy-related statistics on production and consumption, international trade and gross domestic production. A map is available for users to view data by province or territory.',
    dateReleased: '2020-01-18',
    provider: 'Statistics Canada',
    subjects: ['Energy'],
    type: 'Public dataset',
  },
  {
    id: '18-10-0204-01',
    title: 'Electric power selling price index, monthly',
    abstract:
      'Electric power selling price index (EPSPI). Monthly data are available from January 1981. The table presents data for the most recent reference period and the last four periods. The base period for the index is (2014=100).',
    dateReleased: '2020-02-11',
    provider: 'Statistics Canada',
    subjects: ['Prices and price indexes', 'Producer price indexes', 'Other content related to Producer price indexes', 'Energy', 'Electricity and renewable energy'],
    type: 'Public dataset',
  },
  {
    id: '18-10-0204-02',
    title: 'Electric power selling price index, percentage change, monthly',
    abstract:
      'Electric power selling price index (EPSPI). Monthly data are available from February 1981. The table presents month-over-month and year-over-year percentage changes for various aggregation levels. The base period for the index is (2014=100).',
    dateReleased: '2020-02-11',
    provider: 'Statistics Canada',
    subjects: ['Prices and price indexes', 'Producer price indexes', 'Other content related to Producer price indexes', 'Energy', 'Electricity and renewable energy'],
    type: 'Public dataset',
  },
  {
    id: '25-10-0015-01',
    title: 'Electric power generation, monthly generation by type of electricity',
    abstract:
      'Electricity generation by class of electricity producer (electric utilities, electricity producers, industries, etc.) and type of electricity generation (hydroelectric, combustible fuels, wind, etc.). Data are presented at the national and provincial levels, however not all combinations are available.',
    dateReleased: '2020-02-04',
    provider: 'Statistics Canada',
    subjects: ['Energy', 'Energy supply and use', 'Electricity and renewable energy'],
    type: 'Public dataset',
  },
  {
    id: '25-10-0015-02',
    title: 'Electric power generation, monthly generation by type of electricity',
    abstract:
      'Electricity generation by class of electricity producer (electric utilities, electricity producers, industries, etc.) and type of electricity generation (hydroelectric, combustible fuels, wind, etc.). Data are presented at the national and provincial levels, however not all combinations are available.',
    dateReleased: '2020-02-04',
    provider: 'Statistics Canada',
    subjects: ['Energy', 'Energy supply and use', 'Electricity and renewable energy'],
    type: 'Public dataset',
  },
  {
    id: '25-10-0015-03',
    title: 'Electric power generation, monthly generation by type of electricity',
    abstract:
      'Electricity generation by class of electricity producer (electric utilities, electricity producers, industries, etc.) and type of electricity generation (hydroelectric, combustible fuels, wind, etc.). Data are presented at the national and provincial levels, however not all combinations are available.',
    dateReleased: '2020-02-04',
    provider: 'Statistics Canada',
    subjects: ['Energy', 'Energy supply and use', 'Electricity and renewable energy'],
    type: 'Public dataset',
  },
  {
    id: '25-10-0015-04',
    title: 'Electric power generation, monthly generation by type of electricity',
    abstract:
      'Electricity generation by class of electricity producer (electric utilities, electricity producers, industries, etc.) and type of electricity generation (hydroelectric, combustible fuels, wind, etc.). Data are presented at the national and provincial levels, however not all combinations are available.',
    dateReleased: '2020-02-04',
    provider: 'Statistics Canada',
    subjects: ['Energy', 'Energy supply and use', 'Electricity and renewable energy'],
    type: 'Public dataset',
  },
];

export const projects = [
  {
    id: '1219-000001',
    title: 'Project title example one',
    status: 'Active',
    expiry: '2024-09-09',
    state: 'Running',
    storage: {
      units: 'GB',
      used: 2.2,
      total: 50,
    },
  },
  {
    id: '1219-000002',
    title: 'Project title example two',
    status: 'Active',
    expiry: '2025-01-10',
    state: 'Stopped',
    storage: {
      units: 'GB',
      used: 20,
      total: 50,
    },
  },
  {
    id: '1219-000003',
    title: 'Project title example three',
    status: 'Active',
    expiry: '2020-12-15',
    state: 'Stopped',
    storage: {
      units: 'GB',
      used: 45,
      total: 50,
    },
  },
  {
    id: '1219-000004',
    title: 'Project title example four',
    status: 'Expired',
    expiry: '2018-12-15',
    state: 'Stopped',
    storage: {
      units: 'GB',
      used: 9.8,
      total: 50,
    },
  },
  {
    id: '1219-000005',
    title: 'Project title example five',
    status: 'Expired',
    expiry: '2019-12-31',
    state: 'Stopped',
    storage: {
      units: 'GB',
      used: 48,
      total: 50,
    },
  },
  {
    id: '1219-000006',
    title: 'Project title example six',
    status: 'Expired',
    expiry: '2018-01-01',
    state: 'Stopped',
    storage: {
      units: 'GB',
      used: 2.2,
      total: 50,
    },
  },
];

export const requestListResearchers = [
  {
    id: '1001-1234567',
    name: 'DAaas-1234567',
    statusHead: 'active',
    status: 'Submitted',
    cancellationReason: '',
    submitted: 'August 28, 2020',
    updated: 'August 29, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'eltonjohn@cloud.statcan.ca',
    analystEmail: 'brian.bill@cloud.statcan.ca',
    files: [
      'This is file 1',
      'Another file',
      'A large file name with lorem ipsum',
      'File about something',
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234569',
    name: 'DAaas-0000001',
    statusHead: 'Approved',
    status: 'Approved',
    cancellationReason: '',
    submitted: 'August 21, 2020',
    updated: 'August 24, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'leonardcohen@cloud.statcan.ca',
    analystEmail: 'julie.trll@cloud.statcan.ca',
    files: [
      'This is file 1',
      'Another file',
      'A large file name with lorem ipsum',
      'File about something',
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234501',
    name: 'DAaas-0000002',
    statusHead: 'active',
    status: 'Draft',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 24, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'averylongemailgoeshere@cloud.statcan.ca',
    analystEmail: 'julie.trll@cloud.statcan.ca',
    files: [
      'This is file 1',
      'Another file',
      'A large file name with lorem ipsum',
      'File about something',
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234502',
    name: 'DAaas-0000003',
    statusHead: 'withdrawn',
    status: 'Withdrawn',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 24, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'someemail@cloud.statcan.ca',
    analystEmail: 'paul.colton@cloud.statcan.ca',
    files: [
      'A large file name with lorem ipsum',
      'File about something',
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234503',
    name: 'DAaas-0000004',
    statusHead: 'withdrawn',
    status: 'Withdrawn',
    cancellationReason: 'No supporting documentation was provided by the researcher.',
    submitted: 'August 20, 2020',
    updated: 'August 24, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'someemail@cloud.statcan.ca',
    analystEmail: 'philip.duran@cloud.statcan.ca',
    files: [
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234504',
    name: 'DAaas-0000005',
    statusHead: 'active',
    status: 'Draft',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 23, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'anotheremail@cloud.statcan.ca',
    analystEmail: 'eva.silver@cloud.statcan.ca',
    files: [
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234505',
    name: 'DAaas-0000006',
    statusHead: 'active',
    status: 'Submitted',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 22, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'anotheremail@cloud.statcan.ca',
    analystEmail: 'adrian.bonjour@cloud.statcan.ca',
    files: [
      'File one',
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234506',
    name: 'DAaas-0000007',
    statusHead: 'approved',
    status: 'Approved',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 22, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'perfectworks@cloud.statcan.ca',
    analystEmail: 'eva.silver@cloud.statcan.ca',
    files: [
      'File one',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234507',
    name: 'DAaas-0000008',
    statusHead: 'approved',
    status: 'Approved',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 22, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'perfectworks@cloud.statcan.ca',
    analystEmail: 'eva.silver@cloud.statcan.ca',
    files: [
      'File one',
      'File 5',
      'File 8',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234508',
    name: 'DAaas-0000009',
    statusHead: 'active',
    status: 'Draft',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 22, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'torontostuff@cloud.statcan.ca',
    analystEmail: 'eva.silver@cloud.statcan.ca',
    files: [
      'File one',
      'File 8',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234509',
    name: 'DAaas-0000010',
    statusHead: 'active',
    status: 'Draft',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 22, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'ottawarules@cloud.statcan.ca',
    analystEmail: 'eva.silver@cloud.statcan.ca',
    files: [
      'File one',
      'File 8',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234510',
    name: 'DAaas-0000011',
    statusHead: 'active',
    status: 'Draft',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 22, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'ottawarules@cloud.statcan.ca',
    analystEmail: 'eva.silver@cloud.statcan.ca',
    files: [
      'File one',
      'File 8',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234511',
    name: 'DAaas-0000012',
    statusHead: 'active',
    status: 'Submitted',
    cancellationReason: '',
    submitted: 'August 28, 2020',
    updated: 'August 29, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'eltonjohn@cloud.statcan.ca',
    analystEmail: 'brian.bill@cloud.statcan.ca',
    files: [
      'This is file 1',
      'Another file',
      'A large file name with lorem ipsum',
      'File about something',
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234512',
    name: 'DAaas-0000013',
    statusHead: 'approved',
    status: 'Approved',
    cancellationReason: '',
    submitted: 'August 21, 2020',
    updated: 'August 24, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'leonardcohen@cloud.statcan.ca',
    analystEmail: 'julie.trll@cloud.statcan.ca',
    files: [
      'This is file 1',
      'Another file',
      'A large file name with lorem ipsum',
      'File about something',
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234513',
    name: 'DAaas-0000014',
    statusHead: 'active',
    status: 'Draft',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 24, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'averylongemailgoeshere@cloud.statcan.ca',
    analystEmail: 'julie.trll@cloud.statcan.ca',
    files: [
      'This is file 1',
      'Another file',
      'A large file name with lorem ipsum',
      'File about something',
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234514',
    name: 'DAaas-0000015',
    statusHead: 'cancelled',
    status: 'Cancelled',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 24, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'someemail@cloud.statcan.ca',
    analystEmail: 'paul.colton@cloud.statcan.ca',
    files: [
      'A large file name with lorem ipsum',
      'File about something',
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234515',
    name: 'DAaas-0000016',
    statusHead: 'cancelled',
    status: 'Cancelled',
    cancellationReason: 'No supporting documentation was provided by the researcher.',
    submitted: 'August 20, 2020',
    updated: 'August 24, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'someemail@cloud.statcan.ca',
    analystEmail: 'philip.duran@cloud.statcan.ca',
    files: [
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234516',
    name: 'DAaas-0000017',
    statusHead: 'active',
    status: 'Draft',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 23, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'anotheremail@cloud.statcan.ca',
    analystEmail: 'eva.silver@cloud.statcan.ca',
    files: [
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
  {
    id: '1001-1234517',
    name: 'DAaas-0000017',
    statusHead: 'active',
    status: 'Draft',
    cancellationReason: '',
    submitted: 'August 20, 2020',
    updated: 'August 23, 2020',
    expiration: 'September 20, 2020',
    researcherEmail: 'anotheremail@cloud.statcan.ca',
    analystEmail: 'eva.silver@cloud.statcan.ca',
    files: [
      'File 4',
      'File 5',
    ],
    summary: 'Some summary content goes here',
  },
];

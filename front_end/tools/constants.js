export const monthsDropDown = [
   {
      name: 'January',
      key: 'jan',
   },
   {
      name: 'February',
      key: 'feb',
   },
   {
      name: 'March',
      key: 'mar',
   },
   {
      name: 'April',
      key: 'apr',
   },
   {
      name: 'May',
      key: 'may',
   },
   {
      name: 'June',
      key: 'jun',
   },
   {
      name: 'July',
      key: 'jul',
   },
   {
      name: 'August',
      key: 'aug',
   },
   {
      name: 'September',
      key: 'sep',
   },
   {
      name: 'October',
      key: 'oct',
   },
   {
      name: 'November',
      key: 'nov',
   },
   {
      name: 'December',
      key: 'dec',
   },
   {
      name: 'All',
      key: 'all',
   },
];

export const getYearDropDown = (currentYear) => [
   {
      name: currentYear,
      key: currentYear,
   },
   {
      name: currentYear + 1,
      key: currentYear + 1,
   },
   {
      name: currentYear + 2,
      key: currentYear + 2,
   },
];

export const menu = [
   {
      primary: 'Who We Are',
      secondary: [
         ['Our Vision', 'vision'],
         ['Faith Statement', 'faith'],
         ['Annual Report', 'report'],
      ],
   },
   {
      primary: 'Team',
      secondary: [
         ['Advisory Board', 'advisory'],
         ['Board Members', 'board'],
         ['Our Partners', 'partners'],
         ['The Founders', 'founders'],
      ],
   },
   {
      primary: 'Missionaries',
      secondary: [['Cassandra Lynn Grist', 'grist']],
   },
   {
      primary: 'Events',
      secondary: [
         ['Banquet', 'banquet'],
         ['Calendar', 'calendar'],
         ['Trip Registration', 'trip'],
      ],
   },
   {
      primary: 'Ministries',
      secondary: [
         ['Brest Bible Church', 'brest'],
         ['Day Care Centers', 'daycare'],
         ['Church Planting', 'plant'],
         ['Evangelism', 'gospel'],
         ['Orphan Adoption', 'orphans'],
         ['Youth Outreach', 'youth'],
      ],
   },
   {
      primary: 'Resources',
      secondary: [
         ['Gallery', 'gallery'],
         ['Videos', 'videos'],
         ['News', 'news'],
         ['Things to Know', 'brief'],
         ['Fundraising Letter', 'letter'],
      ],
   },
   {
      primary: ['Store', 'https://shop.belarusmission.org'],
      secondary: null,
   },
   {
      primary: ['Donate', 'donate'],
      secondary: [
         ['General Fund', 'donate'],
         ['Matching Fund', 'matching'],
         ['Love in Action', 'love'],
         ['Good & Evil Bible', 'literature'],
         ['Legacy Giving', 'legacy'],
         ['Trip Donation', 'pay'],
      ],
   },
   {
      primary: ['Contact', 'contact'],
      secondary: null,
   },
];

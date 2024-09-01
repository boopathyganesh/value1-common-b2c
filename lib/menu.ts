const menu = [
  {
    id: 1,
    title: "Dashboard",
    icon: "/images/admin/dashboard.svg",
    link: "/reward-store",
  },
  {
    id: 2,
    title: "Online Deals",
    icon: "/images/admin/dashboard.svg",
    link: "/reward-store/online-deals",
  },
  // {
  //   id: 3,
  //   title: "Online Deals",
  //   subList:[
  //     {
  //       title:"Top Stores",
  //       link:'/reward-store/online-deals/top-stores',
  //       icon: LuStore,
  //     },
  //     {
  //       title:"Trending Deals",
  //       link:'/reward-store/online-deals/trending-deals',
  //       icon: LuTrendingUp,
  //     },
  //   ],
  //   icon: LuTags,
  //   link: "/",
  // },
  {
    id: 4,
    title: "Travel",
    subList:[
      {
        title:"Bus",
        link:'/reward-store/travel/bus-booking',
        icon: "/images/admin/dashboard.svg",
      },
      {
        title:"Holiday",
        link:'/reward-store/travel/holiday',
        icon: "/images/admin/dashboard.svg",
      },
    ],
    icon: "/images/admin/dashboard.svg",
    link: "/",
  },
  {
    id: 5,
    title: "Financial Services",
    subList:[
      {
        title:"Loans",
        link:'/reward-store/finance/loans',
        icon: "/images/admin/dashboard.svg",
      },
      {
        title:"Insurance",
        link:'/reward-store/finance/insurance',
        icon: "/images/admin/dashboard.svg",
      },
      {
        title:"Credit Cards",
        link:'/reward-store/finance/credit-cards',
        icon: "/images/admin/dashboard.svg",
      },
      {
        title:"Capital Market",
        link:'/reward-store/finance/capital-market',
        icon: "/images/admin/dashboard.svg",
      },
    ],
    icon: "/images/admin/dashboard.svg",
    link: "/",
  },
  {
    id: 6,
    title: "Education",
    subList:[
      {
        title:"Overseas Education",
        link:'/reward-store/education/overseas',
        icon: "/images/admin/dashboard.svg",
      },
      {
        title:"Language Classes",
        link:'/reward-store/education/language',
        icon: "/images/admin/dashboard.svg",
      },
    ],
    icon: "/images/admin/dashboard.svg",
    link: "/",
  },
  {
    id: 7,
    title: "Good Find Brands",
    icon: "/images/admin/dashboard.svg",
    link: "/reward-store/value-brands",
  },
  {
    id: 8,
    title: "Value Professionals",
    icon: "/images/admin/dashboard.svg",
    link: "/reward-store/professionals",
  },
  {
    id: 9,
    title: "Value Labs",
    icon: "/images/admin/dashboard.svg",
    link: "/reward-store/value-labs",
  },
  {
    id: 10,
    title: "Good Deeds",
    icon: "/images/admin/dashboard.svg",
    link: "/reward-store/good-deed",
  },
];

export default menu;

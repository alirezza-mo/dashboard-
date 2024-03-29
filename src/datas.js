let xAxisData = [
  {
    name: "jan",
    sale: 112_000,
  },
  {
    name: "feb",
    sale: 95_500,
  },
  {
    name: "mar",
    sale: 12_000,
  },
  {
    name: "apr",
    sale: 99_050,
  },
  {
    name: "may",
    sale: 48_000,
  },
  {
    name: "jun",
    sale: 85_000,
  },
  {
    name: "jul",
    sale: 29_000,
  },
  {
    name: "agu",
    sale: 0,
  },
  {
    name: "sep",
    sale: 78_800,
  },
  {
    name: "oct",
    sale: 65_100,
  },
  {
    name: "nov",
    sale: 100_476,
  },
  {
    name: "dev",
    sale: 96_400,
  },
];

const newMembers = [
  {
    id: 1,
    username: "alireza",
    title: "frontend",
    img: "images/me.jpg",
  },
  {
    id: 2,
    username: "ahmad",
    title: "backend",
    img: "images/me.jpg",
  },
  {
    id: 3,
    username: "hamid",
    title: "seo",
    img: "images/me.jpg",
  },
  {
    id: 4,
    username: "ali",
    title: "full stack",
    img: "images/me.jpg",
  },
];

const transActons = [
  {
    id: 1 ,
    customer : 'alireza moradi' , 
    date : '2 apr 2021' ,
    amount: 125 ,
    status: 'Approved' ,
    img: "images/me.jpg",
  } ,
  {
    id: 2 ,
    customer : 'ali rashidi' , 
    date : '5 apr 2022' ,
    amount: 455 ,
    status: 'Pending' ,
    img: "images/me.jpg",
  } ,
  {
    id: 3 ,
    customer : 'ahmad mmdi' , 
    date : '29 nov 2022' ,
    amount: 885 ,
    status: 'Declined' ,
    img: "images/me.jpg",
  } ,
  {
    id: 4 ,
    customer : 'mehdi mokhtari' , 
    date : '21 jul 2020' ,
    amount: 25 ,
    status: 'Approved' ,
    img: "images/me.jpg",
  } ,
]
const userRows = [
  {
    id:1 ,
    name: 'alireza moradi' ,
    avatar : 'images/me.jpg' ,
    status : 'active' ,
    transactions : '$110' ,
    email : 'ali@gmail.com'
  } ,
  {
    id:2 ,
    name: 'ali moradi' ,
    avatar : 'images/me.jpg' ,
    status : 'non-active' ,
    transactions : '$10' ,
    email : 'ali@gmail.com'
  } ,
  {
    id:3 ,
    name: 'alireza farhadi' ,
    avatar : 'images/me.jpg' ,
    status : 'active' ,
    transactions : '$90' ,
    email : 'ali@gmail.com'
  } ,
  {
    id:4 ,
    name: 'kaveh moradi' ,
    avatar : 'images/me.jpg' ,
    status : 'non-active' ,
    transactions : '$0' ,
    email : 'ali@gmail.com'
  } ,
  {
    id:5 ,
    name: 'amir fatahi' ,
    avatar : 'images/me.jpg' ,
    status : 'active' ,
    transactions : '$210'  ,
    email : 'ali@gmail.com'
  } ,
]

const products = [
  {
    id:1 ,
    title: 'Asus' ,
    avatar: 'images/laptop1.webp' ,
    price:890
  } ,
  {
    id:2 ,
    title: 'HP' ,
    avatar: 'images/laptop2.avif' ,
    price:790
  } ,
  {
    id:3 ,
    title: 'Lenevo' ,
    avatar: 'images/laptop3.png' ,
    price:990
  } ,
  {
    id:4 ,
    title: 'apple' ,
    avatar: 'images/laptop4.avif' ,
    price:970
  } ,
]
const productsData = [
  {
    name : 'jan' ,
    sales:4000
  } ,
  {
    name : 'feb' ,
    sales:300
  } ,
  {
    name : 'mar' ,
    sales: 3650
  } ,
]
export { xAxisData, newMembers , transActons , userRows , products ,productsData };

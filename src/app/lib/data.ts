import {
  TCardData,
  TchartsData,
  TproductData,
  TrightbarData,
  TtransactionData,
  TuserData,
} from "@/types/types";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export const cardsData: TCardData[] = [
  {
    id: 1,
    title: "Total Users",
    userTotal: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Total Users",
    userTotal: 12.435,
    change: 5,
  },
  {
    id: 3,
    title: "Total Users",
    userTotal: 9.305,
    change: -10,
  },
];

export const transactionData: TtransactionData = [
  {
    id: 1,
    userName: "John Doe",
    userImg: "/noavatar.png",
    status: "pending",
    date: "2023/05/24",
    amount: 3.2,
  },
  {
    id: 2,
    userName: "Satyam Thakur",
    userImg: "/noavatar.png",
    status: "cancelled",
    date: "2023/05/24",
    amount: 3.2,
  },
  {
    id: 3,
    userName: "Rajesh Dai",
    userImg: "/noavatar.png",
    status: "completed",
    date: "2023/05/24",
    amount: 65000,
  },
  {
    id: 4,
    userName: "Vivek Nepal",
    userImg: "/noavatar.png",
    status: "pending",
    date: "2023/05/24",
    amount: 3.2,
  },
  {
    id: 5,
    userName: "Munna Bhai",
    userImg: "/noavatar.png",
    status: "pending",
    date: "2023/05/24",
    amount: 3.2,
  },
  {
    id: 6,
    userName: "Boleto Circuit",
    userImg: "/noavatar.png",
    status: "cancelled",
    date: "2023/05/24",
    amount: 3.2,
  },
];

export const chartsData: TchartsData = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];

export const rightbarData: TrightbarData = [
  {
    notification: "🔥Available Now",
    image: "/astronaut.png",
    title: "How to use new version of the admin dashboard ?",
    subtitle: "Takes 4 minutes to learn",
    desc: "learn how to effectively navigate and utilize the updated features of the admin dashboard with this concise guide.",
    button: {
      icon: MdPlayCircleFilled({ size: 24 }),
      text: "Watch",
    },
  },
  {
    notification: "🚀 Coming Soon",
    title:
      "New server statuss are available, partial pre-rendering is coming up!",
    subtitle: "Boost your productivity",
    desc: "Discover the latest enhancements: New server statuss are at your fingertips, and partial prerendering is just around the corner.",
    button: {
      icon: MdReadMore({ size: 24 }),
      text: "Learn",
    },
  },
];

export const usersData: TuserData = [
  
  {
    id: 1,
    userName: "John Doe",
    userImg: "/noavatar.png",
    email: "hello@gmail.com",
    createdAt: "2023/05/24",
    role: "client",
    status: "active",
  },
  {
    id: 2,
    userName: "Munna Bhai",
    userImg: "/noavatar.png",
    email: "munnabhai@gmail.com",
    createdAt: "2023/05/22",
    role: "client",
    status: "passive",
  },
  {
    id: 3,
    userName: "Boleto Circuit",
    userImg: "/noavatar.png",
    email: "circuit@gmail.com",
    createdAt: "2023/03/26",
    role: "client",
    status: "active",
  },
  {
    id: 4,
    userName: "Vivek Nepal",
    userImg: "/noavatar.png",
    email: "vivek@gmail.com",
    createdAt: "2023/08/12",
    role: "client",
    status: "active",
  },
  {
    id: 5,
    userName: "Tony Stark",
    userImg: "/noavatar.png",
    email: "tonystark@gmail.com",
    createdAt: "2023/08/12",
    role: "client",
    status: "active",
  },
  {
    id: 6,
    userName: "Harry Bhai",
    userImg: "/noavatar.png",
    email: "harrybhai@gmail.com",
    createdAt: "2023/08/12",
    role: "client",
    status: "active",
  },
];

export const productData: TproductData = [
  {
    id: 1,
    product: "Iphone",
    productImg: "/astronaut.png",
    desc: "powerful, beautiful, durable",
    price: 123,
    createdAt: "2023/05/24",
    stock: 34,
  },
  {
    id: 2,
    product: "Iphone",
    productImg: "/astronaut.png",
    desc: "powerful, beautiful, durable",
    price: 123,
    createdAt: "2023/05/24",
    stock: 34,
  },
  {
    id: 3,
    product: "Iphone",
    productImg: "/astronaut.png",
    desc: "powerful, beautiful, durable",
    price: 123,
    createdAt: "2023/05/24",
    stock: 34,
  },
  {
    id: 4,
    product: "Iphone",
    productImg: "/astronaut.png",
    desc: "powerful, beautiful, durable",
    price: 123,
    createdAt: "2023/05/24",
    stock: 34,
  },
  {
    id: 5,
    product: "Iphone",
    productImg: "/astronaut.png",
    desc: "powerful, beautiful, durable",
    price: 123,
    createdAt: "2023/05/24",
    stock: 34,
  },
  {
    id: 6,
    product: "Iphone",
    productImg: "/astronaut.png",
    desc: "powerful, beautiful, durable",
    price: 123,
    createdAt: "2023/05/24",
    stock: 34,
  },
];

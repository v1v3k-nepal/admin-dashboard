import { TCardData, TchartsData, TrightbarData, TtransactionData } from "@/types/types";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export const cardsData:TCardData[] = [
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

export const transactionData:TtransactionData = [
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

export const chartsData:TchartsData = [
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
      icon: MdPlayCircleFilled({size:24}),
      text: "Watch",
    },
  },
  {
    notification: "🚀 Coming Soon",
    title:
      "New server actions are available, partial pre-rendering is coming up!",
    subtitle: "Boost your productivity",
    desc: "Discover the latest enhancements: New server actions are at your fingertips, and partial prerendering is just around the corner.",
    button: {
      icon: MdReadMore({size:24}),
      text: "Learn",
    },
  },
];

export type TmenuLink = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

export type TmenuCategory = {
  title: string;
  list: TmenuLink[];
};

export type TmenuItems = TmenuCategory[];

export type TCardData = {
  id: number;
  title: string;
  userTotal: number;
  change: number;
};

export type TtransactionData = Array<{
  id: number;
  userName: string;
  userImg: string;
  status: string;
  date: string;
  amount: number;
}>;

// export type TtransactionData2 = {
//   id: number;
//   userName: string;
//   userImg: string;
//   status: string;
//   date: string;
//   amount: number;
// }[];

export type TchartsData = Array<{
  name: string,
  visit: number,
  click: number,
}>

export type TrightbarData = {
  notification: string,
  title: string,
  subtitle: string,
  image?: string,
  desc: string,
  button:{
    icon: React.ReactNode,
    text: string
  }
}[]
declare namespace Com {
  type TmenuLink = {
    title: string;
    path: string;
    icon: React.ReactNode;
  };

  type TmenuCategory = {
    title: string;
    list: TmenuLink[];
  };

  type TmenuItems = TmenuCategory[];

  type TCardData = {
    id: number;
    title: string;
    userTotal: number;
    change: number;
  };

  type TtransactionData = Array<{
    id: number;
    userName: string;
    userImg: string;
    status: string;
    date: string;
    amount: number;
  }>;

  type TchartsData = Array<{
    name: string;
    visit: number;
    click: number;
  }>;

  type TrightbarData = {
    notification: string;
    title: string;
    subtitle: string;
    image?: string;
    desc: string;
    button: {
      icon: React.ReactNode;
      text: string;
    };
  }[];

  type TuserData = Array<{
    id: number;
    userName: string;
    userImg: string;
    email: string;
    createdAt: string;
    role: string;
    status: string;
  }>;

  type TproductData = Array<{
    id: number;
    product: string;
    productImg: string;
    desc: string;
    price: number;
    createdAt: string;
    stock: number;
  }>;

  type TableColumns2<T, K extends Extract<keyof T, string>> = {
    thead: string;
    field: K;
    render?: (item?: Partial<T[K]>, obj?: T) => React.ReactNode;
  };

  type TableProps2<T, K extends Extract<keyof T, string>> = {
    data: T[];
    columns: TableColumns<T, K>[];
  };

  type TableColumns<T, K extends Extract<keyof T, string>> = {
    thead: string;
    field: K;
    render: (item: Partial<T[K]>, obj?: T) => React.ReactNode;
  };

  type TableProps<T, K extends Extract<keyof T, string>> = {
    data: T[];
    columns: TableColumns<T, K>[];
  };
}

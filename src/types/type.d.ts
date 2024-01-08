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
    id: number;
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

  type TuserFormData = {
    username: string;
    email: string;
    password: string;
    phone: string;
    isAdmin: boolean;
    isActive: boolean;
    address: string;
    userImg: string;
  };

  interface TuserData extends TuserFormData {
    _id: number;
    createdAt?: string;
    actions: Array<string>;
  }

  type Tcategories = Array<{
    id: string;
    value: string;
    label?: string;
    isChecked: boolean;
  }>;

  type TproductFormData = {
    productName: string;
    price: string;
    color: string;
    productImg: string;
    stock: string;
    size: string;
    category: Tcategories;
    desc: string;
  };

  interface TproductData extends TproductFormData {
    _id: number;
    createdAt: string;
    actions: Array<string>;
  }

  type TableColumns<T, K extends Extract<keyof T, string>> = {
    thead: string;
    field: K;
    render: (item: Partial<T[K]>, obj?: T) => React.ReactNode;
  };

  type TableProps<T, K extends Extract<keyof T, string>> = {
    data: T[];
    columns: TableColumns<T, K>[];
    itemCount: number;
  };

  type TsearchParams = {
    searchParams: {
      q: string;
      itemsPerPage: string;
      page: string;
    };
  };

  type DeleteModalProps = {
    setDeleteModalVisibility: React.Dispatch<React.SetStateAction<string>>;
    id: number;
    deleteWhat: string;
  };
}

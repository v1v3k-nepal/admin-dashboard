export type TmenuLink = {
    title: string,
    path: string,
    icon: React.ReactNode,
  };
  
export type TmenuCategory = {
    title: string;
    list: TmenuLink[];
  };
  
export type TmenuItems = TmenuCategory[];

export type TCardData = {
  item: {
      id: number,
      title: string,
      userTotal: number,
      change: number,
  }
}
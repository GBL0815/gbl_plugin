export interface NavItem {
  title: string;
  route: string;
  choosed: boolean;
}

export interface NavLable {
  title: string;
  children: NavItem[];
}

export interface State {
  navList: NavLable[]
}

export interface IndexList {
  index0: number;
  index1: number;
}

export interface HeaderLink {
  name: string;
  url: string;
  note?: string;
}

export interface SidebarLink {
  name: string;
  url: string;
  icon: string;
}

export interface StayOption {
  id: number;
  name: string;
  note?: string;
}

export interface City {
  id: string;
  name: string;
  cit_alias: string;
}

export interface SimpleType {
  id: number;
  name: string;
}

export interface SubItem {
  name: string;
  quantity: number;
  price: number;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  sub_items: SubItem[];
  descriptors: string[];
}

export interface Receipt {
  restaurant: {
    name: string;
    address: string;
    phone: string;
  };
  items: Item[];
  summary: {
    subtotal: number;
    tax: number;
    tip: number;
    total: number;
  };
}

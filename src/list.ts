export interface Item {
  name: string;
  quantity: number;
  checked: boolean;
}

export type ShoppingList = Item[];

export function addItem(list: ShoppingList, name: string, quantity = 1): ShoppingList {
  const existing = list.find((i) => i.name === name);
  if (existing) {
    return list.map((i) =>
      i.name === name ? { ...i, quantity: i.quantity + quantity } : i
    );
  }
  return [...list, { name, quantity, checked: false }];
}

export function checkItem(list: ShoppingList, name: string): ShoppingList {
  return list.map((i) => (i.name === name ? { ...i, checked: true } : i));
}

export function removeItem(list: ShoppingList, name: string): ShoppingList {
  return list.filter((i) => i.name !== name);
}

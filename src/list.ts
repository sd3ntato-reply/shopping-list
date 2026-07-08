export interface Item {
  name: string;
  quantity: number;
  checked: boolean;
}

export type ShoppingList = Item[];

export function addItem(list: ShoppingList, name: string, quantity = 1): ShoppingList {
  return [...list, { name, quantity, checked: false }];
}

export function checkItem(list: ShoppingList, name: string): ShoppingList {
  return list.map((i) => (i.name === name ? { ...i, checked: true } : i));
}

/** Display label for a list item, visually distinguishing checked items. */
export function displayLabel(item: Item): string {
  return item.checked ? `~~${item.name}~~` : item.name;
}

export function removeItem(list: ShoppingList, name: string): ShoppingList {
  return list.filter((i) => i.name !== name);
}

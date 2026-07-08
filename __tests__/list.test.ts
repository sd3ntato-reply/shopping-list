import { describe, it, expect } from "vitest";
import { addItem, checkItem, removeItem, type ShoppingList } from "../src/list";

describe("addItem", () => {
  it("adds a new item", () => {
    const list = addItem([], "milk");
    expect(list).toEqual([{ name: "milk", quantity: 1, checked: false }]);
  });
});

describe("checkItem", () => {
  it("marks an item checked", () => {
    const list: ShoppingList = [{ name: "milk", quantity: 1, checked: false }];
    const result = checkItem(list, "milk");
    expect(result).toEqual([{ name: "milk", quantity: 1, checked: true }]);
  });
});

describe("removeItem", () => {
  it("removes an existing item", () => {
    const list: ShoppingList = [{ name: "milk", quantity: 1, checked: false }];
    expect(removeItem(list, "milk")).toEqual([]);
  });
});

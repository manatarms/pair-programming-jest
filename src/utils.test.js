import * as utils from "./utils";

test("should say hi", () => {
  expect("Hi").toBe("Hi");
  console.log("Hi");
});

test.skip("should add two numbers", () => {
  expect(utils.sum(1, 2)).toBe(3);
});

test.skip("should return null for non array inputs ", () => {
  expect(utils.arrayMerge(2, "a")).toBe(null);
});

test.skip("should merge arrays", () => {
  expect(utils.arrayMerge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test.skip("should convert object to be [1, 2, 3]", () => {
  expect(utils.convertObjectToArray({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
});

test.skip("should merge objects", () => {
  const objectA = { a: 10 }, objectB = { b: 20 };
  expect(utils.mergeObjects(objectA, objectB)).toEqual({ a: 10, b: 20 });
  expect(objectA).toEqual({ a: 10 });
});

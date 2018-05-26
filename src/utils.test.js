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

test.skip("should merge two arrays", () => {
  expect(utils.arrayMerge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test.skip("should convert object values to an array", () => {
  expect(utils.convertObjectToArray({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
});

test.skip("should merge two objects", () => {
  const objectA = { a: 10 }, objectB = { b: 20 };
  expect(utils.mergeObjects(objectA, objectB)).toEqual({ a: 10, b: 20 });
  expect(objectA).toEqual({ a: 10 });
  expect(objectB).toEqual({ b: 20 });
});

test("Should test async code", () => {
  expect(utils.fetchData()).toBe("data");
});

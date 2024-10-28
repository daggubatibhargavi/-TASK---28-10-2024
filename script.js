var arr = [2, 4, 6, 8, 10];
let result = arr.reduce((acc, curr) => acc + curr, 0);
console.log(result);

var arr = [1, 3, 5, 7];
let totalProduct = arr.reduce((acc, curr) => acc * curr, 1);
console.log(totalProduct);

var arr = ["apple", "banana", "cherry"];
let toUppercase = arr.map((item) => item.toUpperCase());
console.log(toUppercase);

var arr = [1, 2, 3, 4, 5];
let multipliedBy = arr.map((item) => item * 10);
console.log(multipliedBy);

const people = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 30 },
  { name: "Mike", age: 35 },
];
let ageArr = people.map((people) => people.age);
console.log(ageArr);

var arr = ["apple", "banana", "cherry"];
arr.forEach((fruit) => {
  console.log(fruit);
});
const arr1 = [1, 2, 3, 4, 5, 6];
let Count = 0;

arr1.forEach((num) => {
  if (num % 2 === 0) {
    Count++;
  }
});

console.log(`Count of even numbers: ${Count}`);

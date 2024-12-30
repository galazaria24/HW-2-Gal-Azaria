// TASK 1
let person = {
  name: "Gal",
  age: 24,
  isStudent: true,
};
console.log(person);

// TASK 2
console.log(person.name, person.age);

// TASK 3
person.age = 25;
person["hobby"] = "קדרות";
console.log(person);

// TASK 4
let movie = {
  title: "The Lion King",
  genre: "adventure",
};
movie["releaseYear"] = 1994;
movie["isPopular"] = true;
movie["genre"] = "animation";
console.log(movie);

// TASK 5
let car = {
  make: "BMW",
  model: "M6",
  year: 2023,
  color: "pink",
};

for (let key in car) {
  console.log(car[key]);
}

// TASK 6
let firstPerson = {
  firstPersonname: "Aviv",
  firstPersonage: 26,
};
let secondPerson = {
  secondPersonname: "Lavi",
  secondPersonage: 0.5,
};
function combinePeople(obj1, obj2) {
  let newPerson = {};
  for (let key in obj1) {
    newPerson[key] = obj1[key];
  }
  for (let key in obj2) {
    newPerson[key] = obj2[key];
  }
  return newPerson;
}
console.log(combinePeople(firstPerson, secondPerson));

// TASK 7
function countProperties(obj) {
  let counter = 0;
  for (let key in obj) {
    if ((key = !null)) {
      counter++;
    }
  }
  return counter;
}
console.log(`The movie has:${countProperties(movie)} properties`);
console.log(`The person has:${countProperties(person)} properties`);

// TASK 8
delete person.isStudent;
console.log(person);

// TASK 9
function hasProperty(obj, prop) {
  for (let key in obj) {
    if (key == prop) {
      return true;
    }
  }
  return false;
}
console.log(hasProperty(car, "year"));

// TASK 10
function updatePerson(person, key, value) {
  if (!hasProperty(person, key)) {
    person[key] = value;
  } else person.key = value;
}
console.log("Befor update:", person);
updatePerson(person, "age", 24.5);
updatePerson(person, "City", "Nahariya");
console.log("After update:", person);

// PART B
// Task 1
let fruits = ["Banana", "Apple", "Pineapple", "Cherry", "Strawberry"];

console.log(fruits);

// Task 2
console.log(fruits[0], ",", fruits[fruits.length - 1], ",", fruits[2]);

// Task 3

fruits.push("Watermelon");
console.log(fruits);

fruits.unshift("Peach");
console.log(fruits);

fruits.pop(fruits);
console.log(fruits);

// Task 4

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

// Task 5

console.log(fruits.length);

// Task 6

function isInArray(array, element) {
  for (let fruit of array) {
    if (fruit == element) return true;
  }
  return false;
}
console.log(isInArray(fruits, "gggg"));
console.log(isInArray(fruits, "Banana"));

// Task 7

fruits.sort();
console.log(fruits);

// Task 8

fruits.sort().reverse();
console.log(fruits);

// Task 9
//Math.random() מחזיר מספר אקראי בין 0 ל-1.
// Math.random() * 100 יוצר מספר אקראי בין 0 ל-100.
// Math.floor() מעגל את המספר כלפי מטה (כדי לקבל מספר שלם).
// בתוך הלולאה אנחנו מוסיפים את המספרים האקראיים למערך numbers בעזרת push().

let numbers = [];
for (let i = 0; i < 10; i++) numbers.push(Math.round(Math.random() * 100));

console.log(numbers);

function filterEvenNumbers(array) {
  for (let number of array) {
    if (number % 2 == 0) console.log(number);
  }
}
filterEvenNumbers(numbers);

// Task 10

let vegetables = ["Carrot", "Broccoli", "Cucumber"];

let groceries = [];

function combine(array, arr) {
  let newArr = [];
  for (let key of array) {
    if (key != null) {
      newArr.push(key);
    }
  }
  for (let key of arr) {
    if (key != null) {
      newArr.push(key);
    }
  }
  return newArr;
}

groceries = combine(fruits, vegetables);
console.log(groceries);

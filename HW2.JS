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

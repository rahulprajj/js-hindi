

// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log(person.age);
// let keys = Object.values(person)
// console.log(keys);

// let { name:n}=person
// console.log(n);
// console.log(city);
// let fruits = ["apple", "banana"];
// let fruit = ["aam", "grapes"]
// let f= [...fruit,...fruits]
// console.log(f);

// let array = ["apple", "banana", "cherry", "date"];
// let slicedArray = array.splice(1, 3);

// console.log(slicedArray);  // Output: ["banana", "cherry"]
// console.log(array);        // Output: ["apple", "banana", "cherry", "date"] (original array remains unchanged)
// let array = ["apple", "banana", "cherry", "date"];
// let splicedArray = array.splice(, 2);

// console.log(splicedArray);  // Output: ["banana", "cherry"]
// console.log(array);         // Output: ["apple", "kiwi", "mango", "date"] (original array is modified)

// let person = {fname: "John", lname: "Doe", age: 25};

// for (let ke in person) {
//     console.log(ke person[ke]);
// }
// Output: 
// fname: John
// lname: Doe
// age: 25

let strings = ["apple", "banana", "cherry"];

let firstLetters = strings
.map(str => str.charAt(0))
.map(str => str.toUpperCase())

console.log(firstLetters); 







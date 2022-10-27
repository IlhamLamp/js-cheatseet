// ------------------ OBJECT ---------------------
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const { firstName, lastName, age } = profile;

console.log(firstName, lastName, age);

/* output:
John Doe 18
*/

// ------------------- ARRAY ---------------------
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

const [, , thirdFoodx] = favorites;
console.log(thirdFoodx); // -> output -> Nugget

/* output:
Seafood
Salad
Nugget
Soup
*/

// Asignment
let a = 1;
let b = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a] // menukar nilai a dengan b, juga b dengan a

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

// ------------------------------ MAP -------------------------------
/**
 * set() dan get()
 */
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));



/* output
3
England
4
India
 */

// ------------------------------- SET ------------------------------
/**
 * Data yang tidak berurutan, juga tak ber-indeks
 */
const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6); // nilai duplikat akan diabaikan

numberSet.delete(4);

console.log(numberSet);

/* output
Set(4) { 1, 6, 5, 10 }
*/


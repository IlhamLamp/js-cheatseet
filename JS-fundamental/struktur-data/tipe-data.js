// --------------------------- OBJECT {key : value}; ----------------------
/**
 * [] -> bracket, untuk kata yang belum teridentifikasi dan mengandung 2 suku. ex=> ["prop-3"], [3]
 * . -> dot, gunakan jika identifikasi valid. ex=> obj.prop, obj.name
 */
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/

delete user.age; // menghapus

// ----------------------------- ARRAY []; -------------------------
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

console.log(myArray[0]); // output -> Cokelat

myArray.push('JavaScript'); // menambah data ke elemen terakhir
console.log(myArray);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

myArray.pop(); // menghapus data elemen terakhir

//
const urArray = ["Vanilla", 42.5, 22, true, "Designing"];

urArray.shift(); // mengeluarkan elemen pertama
urArray.unshift("Macha"); // mengisi elemen pertama

console.log(urArray);

/* output
[ 'Macha', 42.5, 22, true, 'Designing' ]
*/

delete urArray[1]; // menghapus sesuai index, namun mempertahankan ruang
console.log(urArray);

/* output
[ 'Macha', <1 empty item>, 22, true, 'Designing' ]
*/

urArray.splice(1, 1); // menghapus dari index 1, sebanyak 1 elemen
console.log(urArray);

/* output
[ 'Macha', 22, true, 'Designing' ]
*/

// ---------------------- SPREAD OPERATOR --------------------
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

console.log(...favorites); // -> Seafood Salad Nugget Soup

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/
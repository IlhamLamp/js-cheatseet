// -------------------------------------- START ------
console.log("Hello World");

// -------------------------------------- EXPRESSION = Dapat dievaluasi menjadi nilai ---
5; // Baris kode ini merupakan expression karena interpreter akan membaca kode ini dan menghasilkan nilai 5.
2 + 3; // Baris kode ini juga merupakan expression. Interpreter mengevaluasi kode dan juga akan menghasilkan nilai 5.

// -------------------------------------- STATEMENT = Intruksi aksi tertentu ----
var yourName;
let yourAge;
const numberOfDays;  // declaration statement

// -------------------------------------- VARIABEL ---
/*
beberapa aturan dalam penamaan variabel yang perlu Anda ketahui:

Harus dimulai dengan huruf atau underscore (_).
Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)
*/

let firstName = "hana"; // (=) assignment expression
let lastName;
lastName = "Skywalker";

console.log(firstName);// >> output -> hana
console.log(lastName); // >> output -> skywalker

let fullName = let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

const x = 100; // > Constant
x = 200;
console.log(x);

const answer = '"I think it\'s awesome!" he answered confidently'; // escape string

// --------------------------------------- OPERATOR ---------
const aString = '10';
const aNumber = 10

console.log(aString == /*sama*/ aNumber) // true, karena nilainya sama-sama 10
console.log(aString === /*identik*/  aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/**
 * && (and) -> semua kondisi terpenuhi -> true
 * || (or) -> salah satu kondisi terpenuhi (true) -> true
 * ! (not) -> membalikkan suatu kondisi 
 */

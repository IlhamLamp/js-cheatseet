//-------------------------- IF/ELSE ----------
let language = "French";
let greeting = "Selamat Pagi"

if (language === "English") {
    greeting = "Good Morning!";
} else if (language === "French") {
    greeting = "Bonjour!"
} else if (language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

/* output
Bonjour!
*/

// Ternary operation
// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

/* output
Anda mendapatkan diskon sebesar 0%
 */

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

// -------------------------- SWITCH CASE -------
let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);

/* output
Bonjour!
*/

//------------------------------ FOR LOOP -------------------
// CONTOH PROGRAM KELIPATAN 3
let i = 1;
for (i; i <= 30; i++) {
    if ((i % 3) == 0) {
        console.log(i);
    }
}

// ----------------------------- FOR OF ---------------------
let myArray = ["Apel", "Melon", "Pear"];

for (const arrayItem of myArray) {
    console.log(arrayItem)
}

/* output
Apel
Melon
Pear
*/

// ----------------------------- WHILE -----------------------
let i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}

// ----------------------------- DO WHILE --------------------
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 100);

/*
Kondisi pada while akan dievaluasi sebelum blok kode di dalamnya dijalankan, 
sedangkan do-while akan mengevaluasi boolean expression setelah blok kodenya berjalan. 
Ini artinya kode di dalam do-while akan dijalankan setidaknya satu kali.
*/




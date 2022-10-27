// ------------------------- DECLARING FUNCTION -----------------------
function greeting(name, language) {
    if (language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

// greeting("Ilham", "hans"); -> bila langsung eksekusi

let greetingMessage = greeting("Harry", "French"); // -> simpan ke variabel
console.log(greetingMessage);

/* output
Bonjour Harry!
*/

// -------------------------- ANONYMOUS FUNCTION ------------------------
const greeting = function (name, language) {
    if (language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Ron', 'English'));

/* output
Good Morning Ron!
 */

// ---------------------------- FUNCTION PARAMETER -------------------------
// Destructuring method
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

/* output
kren is Kylo Ren
*/

// ------------------------------ REST PARAMETER ----------------------------
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
15
*/

// ------------------------------ ARROW FUNCTION -----------------------------
const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}

sayName("Ilham"); // output -> Nama saya ilham

//
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */

// ------------------------------ PRIVATE METHOD -----------------------------
/**
 * Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private.
 */
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */

/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

//1
function minimal(a, b) {
    if (a < b) {
        return a;
    }
    else if (a > b) {
        return b;
    }
    else if (a == b) {
        return a;
    }
}

minimal(10, 2);

//2
function power(a, b) {
    return a ^ b;
}

power(4, 5);
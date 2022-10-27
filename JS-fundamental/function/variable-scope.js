// ------------------------------ SCOPE --------------------------------------
/**
 *Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var 
 pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global. 
 */


// global variable, dapat diakses pada parent() dan child()
const a = 'a';

function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b';

    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

// ------------------------------- CLOSURE ----------------------------------
function outer() {
    var a = 10;

    function inner() {
        var b = 3;

        function deeper() {
            var c = 1;
            console.log(a + b - c);
        }

        console.log(a + b);
        return deeper
    }

    console.log(a);
    return inner
}

const x = outer();
console.log(x()());

/**
 *  10
    13
    12
    undefined
 */
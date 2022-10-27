/*
function main() {
    try {
        console.log("Fetching username...");
        const username = await fetchUsername();
        console.log(`You are logged in as ${username}`);
        console.log("Welcome!");
    } catch (e) {
        console.log("Username tidak ditemukan");
    }
}
*/
function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

/*
let myString = "";

try {
    myString += "a";
    throw Error();
} catch (e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString);
*/

try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
        console.log(arr[i]);
    }
} catch (e) {
    console.log("Out of bounds");
}

function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
console.log("Welcome!");
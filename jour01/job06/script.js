/**
 * Affiche les nombres de 1 à 151 en remplaçant :
 *  - les multiples de 3 par "Fizz"
 *  - les multiples de 5 par "Buzz"
 *  - les multiples de 3 ET 5 par "FizzBuzz"
 */
function fizzbuzz() {
    for (let i = 1; i <= 151; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();

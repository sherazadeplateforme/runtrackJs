/**
 * Vérifie si un nombre est premier.
 * @param {number} n
 * @returns {boolean}
 */
function estPremier(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Retourne la somme de deux nombres premiers, ou false si l'un d'eux ne l'est pas.
 * @param {number} a
 * @param {number} b
 * @returns {number|boolean}
 */
function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    }
    return false;
}

// Tests
console.log(sommeNombresPremiers(3, 7));   // 10
console.log(sommeNombresPremiers(2, 11));  // 13
console.log(sommeNombresPremiers(4, 7));   // false (4 n'est pas premier)
console.log(sommeNombresPremiers(1, 5));   // false (1 n'est pas premier)

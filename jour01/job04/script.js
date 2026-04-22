/**
 * Détermine si une année est bissextile.
 * Une année est bissextile si :
 *  - elle est divisible par 4
 *  - ET (non divisible par 100 OU divisible par 400)
 * @param {number} année
 * @returns {boolean}
 */
function bisextile(année) {
    if ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0) {
        return true;
    }
    return false;
}

// Tests
console.log(bisextile(2024)); // true
console.log(bisextile(1900)); // false
console.log(bisextile(2000)); // true
console.log(bisextile(2023)); // false

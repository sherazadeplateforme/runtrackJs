/**
 * Trie un tableau de nombres dans l'ordre ascendant ou descendant.
 * Algorithme utilisé : tri à bulles (bubble sort).
 * @param {number[]} numbers - Tableau de nombres à trier
 * @param {string} order - "asc" pour croissant, "desc" pour décroissant
 * @returns {number[]} Tableau trié
 */
function tri(numbers, order) {
    // Copie du tableau pour ne pas modifier l'original
    const tableau = [...numbers];
    const n = tableau.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            let doitEchanger = false;

            if (order === "asc" && tableau[j] > tableau[j + 1]) {
                doitEchanger = true;
            } else if (order === "desc" && tableau[j] < tableau[j + 1]) {
                doitEchanger = true;
            }

            if (doitEchanger) {
                // Échange des deux éléments
                const temp = tableau[j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1] = temp;
            }
        }
    }

    return tableau;
}

// Tests
const nombres = [42, 7, 15, 3, 99, 1, 28];
console.log(tri(nombres, "asc"));  // [1, 3, 7, 15, 28, 42, 99]
console.log(tri(nombres, "desc")); // [99, 42, 28, 15, 7, 3, 1]

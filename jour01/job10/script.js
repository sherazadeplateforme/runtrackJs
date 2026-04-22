/**
 * Compte le nombre de voyelles dans une phrase via une boucle for.
 * Voyelles considérées : a, e, i, o, u, y (minuscules et majuscules)
 * @param {string} phrase
 */
function compterVoyelles(phrase) {
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    let compteur = 0;

    for (let i = 0; i < phrase.length; i++) {
        if (voyelles.includes(phrase[i].toLowerCase())) {
            compteur++;
        }
    }

    console.log(`La phrase contient ${compteur} voyelles`);
}

// Tests
compterVoyelles("Bonjour tout le monde"); // 7
compterVoyelles("JavaScript est super");  // 6
compterVoyelles("aeiou");                 // 5

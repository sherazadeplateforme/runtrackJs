/**
 * Incrémente le compteur affiché dans #compteur à chaque clic sur #button.
 * Le listener est attaché en JS (pas de onclick dans le HTML).
 */
function addOne() {
    const compteur = document.getElementById("compteur");
    compteur.textContent = parseInt(compteur.textContent) + 1;
}

document.getElementById("button").addEventListener("click", addOne);

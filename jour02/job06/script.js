/**
 * Détecte le code Konami :
 * ↑ ↑ ↓ ↓ ← → ← → B A
 * Lorsqu'il est saisi, la page se stylise aux couleurs de La Plateforme_.
 */
const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];

let progression = 0;

document.addEventListener("keydown", function (event) {
    if (event.key === konamiCode[progression]) {
        progression++;

        if (progression === konamiCode.length) {
            activerStyle();
            progression = 0;
        }
    } else {
        progression = 0;
    }
});

function activerStyle() {
    document.body.classList.add("konami");

    // Ajout du contenu stylisé
    document.body.innerHTML = `
        <h1>La Plateforme_</h1>
        <p>Code Konami activé 🎮</p>
    `;
}

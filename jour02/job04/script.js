/**
 * Écoute les frappes clavier sur toute la page.
 * - Si la touche est une lettre a-z :
 *     → elle est ajoutée une fois dans le textarea
 *     → si le focus est déjà dans le textarea, elle est ajoutée deux fois
 */
const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function (event) {
    const lettre = event.key;

    // Vérifie que c'est bien une lettre a-z (une seule lettre, minuscule ou majuscule)
    if (/^[a-zA-Z]$/.test(lettre)) {
        const focusDansTextarea = document.activeElement === textarea;

        if (focusDansTextarea) {
            // Le navigateur va déjà ajouter la lettre une fois nativement,
            // on en ajoute une deuxième manuellement
            event.preventDefault();
            textarea.value += lettre + lettre;
        } else {
            textarea.value += lettre;
        }
    }
});

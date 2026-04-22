/**
 * Affiche ou masque un <article> contenant une citation.
 * Si l'article n'existe pas, il est créé et ajouté au DOM.
 * Si l'article existe déjà, il est supprimé.
 */
function showhide() {
    const article = document.getElementById("message");

    if (article) {
        article.remove();
    } else {
        const nouvelArticle = document.createElement("article");
        nouvelArticle.id = "message";
        nouvelArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(nouvelArticle);
    }
}

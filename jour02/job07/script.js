/**
 * Bascule le thème du body entre clair et sombre.
 * Thème sombre : fond noir, texte blanc.
 * Thème clair (défaut) : fond blanc, texte noir.
 */
function changeTheme() {
    const body = document.body;

    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}

document.getElementById("toggle-theme").addEventListener("click", changeTheme);

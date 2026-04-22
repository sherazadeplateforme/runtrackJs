/**
 * Met à jour la largeur du footer en fonction du pourcentage de scroll.
 * La couleur évolue du rouge (0%) au vert (100%) via une teinte HSL.
 */
window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pourcentage = (scrollTop / scrollHeight) * 100;

    const footer = document.getElementById("progress-bar");
    footer.style.width = pourcentage + "%";

    // Couleur : rouge (0°) → orange → vert (120°) selon le pourcentage
    const hue = (pourcentage * 1.2); // 0 → 120
    footer.style.backgroundColor = `hsl(${hue}, 80%, 45%)`;
});

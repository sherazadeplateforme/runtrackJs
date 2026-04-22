/**
 * Affiche dans la console chaque jour de la semaine,
 * du lundi au dimanche.
 */
function afficherJoursSemaines() {
    const joursSemaines = [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
    ];

    for (let i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);
    }
}

afficherJoursSemaines();

/**
 * Vérifie si une date est un jour férié, un week-end ou un jour travaillé.
 * Les jours fériés sont ceux de l'année 2024 (France métropolitaine).
 * @param {Date} date
 */
function jourTravaille(date) {
    // Jours fériés 2024 en France (format : YYYY-MM-DD)
    const joursFeries2024 = [
        "2024-01-01", // Jour de l'An
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-09", // Ascension
        "2024-05-20", // Lundi de Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25", // Noël
    ];

    const joursNoms = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    const moisNoms = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    const jour = joursNoms[date.getDay()];
    const mois = moisNoms[date.getMonth()];
    const annee = date.getFullYear();
    const jourNum = date.getDate();

    // Formater la date en YYYY-MM-DD pour comparer
    const dateStr = `${annee}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(jourNum).padStart(2, "0")}`;

    if (joursFeries2024.includes(dateStr)) {
        console.log(`Le ${jour} ${jourNum} ${mois} ${annee} est un jour férié`);
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, ${jour} ${jourNum} ${mois} ${annee} est un week-end`);
    } else {
        console.log(`Oui, ${jour} ${jourNum} ${mois} ${annee} est un jour travaillé`);
    }
}

// Tests
jourTravaille(new Date("2024-01-01")); // Jour férié
jourTravaille(new Date("2024-01-06")); // Samedi → week-end
jourTravaille(new Date("2024-01-07")); // Dimanche → week-end
jourTravaille(new Date("2024-01-08")); // Lundi → jour travaillé
jourTravaille(new Date("2024-05-01")); // Fête du Travail → jour férié

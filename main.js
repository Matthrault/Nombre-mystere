let nbrMystere = Math.floor(Math.random() * 101)
let nbEssais = 0
let nbEssaisMax = 10

function jeu() {
    let choixJoueur = parseInt(document.getElementById("random").value)

    if (choixJoueur === nbrMystere) {
        alert("Félicitations ! Vous avez trouvé le bon résultat !")
        reinitialiserJeu()
    } else {
        if (choixJoueur > nbrMystere) {
            alert("C'est plus petit !")
        } else if (choixJoueur < nbrMystere) {
            alert("C'est plus grand !")
        }

        nbEssais++

        if (nbEssais >= nbEssaisMax) {
            alert("Vous avez utilisé tous vos essais. Le nombre mystère était " + nbrMystere)
            reinitialiserJeu()
        }
    }
}

function reinitialiserJeu() {
    nbrMystere = Math.floor(Math.random() * 101)
    nbEssais = 0
    document.getElementById("random").value = ""
}
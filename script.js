// ==========================
// Weetjes Wereld - Script
// ==========================


// Categorie filter

function filter(categorie) {

    let kaarten = document.querySelectorAll(".kaart");


    kaarten.forEach(function(kaart) {

        if (categorie === "alles") {

            kaart.style.display = "block";

        } 
        else if (kaart.classList.contains(categorie)) {

            kaart.style.display = "block";

        } 
        else {

            kaart.style.display = "none";

        }

    });

}



// Zoekfunctie

const zoekveld = document.getElementById("search");


if (zoekveld) {

    zoekveld.addEventListener("keyup", function() {


        let zoekterm = zoekveld.value.toLowerCase();


        let kaarten = document.querySelectorAll(".kaart");


        kaarten.forEach(function(kaart) {


            let tekst = kaart.innerText.toLowerCase();


            if (tekst.includes(zoekterm)) {

                kaart.style.display = "block";

            } 
            else {

                kaart.style.display = "none";

            }


        });


    });

}



// Willekeurig weetje

const weetjes = [

"Een octopus heeft drie harten.",
"Licht reist bijna 300.000 kilometer per seconde.",
"Een slak kan meerdere jaren slapen.",
"Bijen kunnen met elkaar communiceren door dansen.",
"Een blauwe vinvis is het grootste dier dat ooit heeft geleefd.",
"De aarde draait in ongeveer 24 uur rond zijn as.",
"Een menselijk hart klopt gemiddeld meer dan 100.000 keer per dag.",
"Een groep flamingo's heet een flamboyance.",
"De maan heeft geen eigen licht, maar weerkaatst zonlicht.",
"Water bestaat uit twee waterstofatomen en één zuurstofatoom."
];


function willekeurigWeetje() {


    let nummer = Math.floor(Math.random() * weetjes.length);


    alert("💡 Wist je dat...\n\n" + weetjes[nummer]);


}

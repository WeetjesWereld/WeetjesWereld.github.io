// =================================
// Weetjes Wereld - Script
// =================================


// Zoekfunctie

const zoekveld = document.getElementById("search");


if (zoekveld) {

    zoekveld.addEventListener("input", function () {

        let zoekterm = zoekveld.value.toLowerCase();

        let kaarten = document.querySelectorAll(".kaart");


        kaarten.forEach(function(kaart) {

            let tekst = kaart.innerText.toLowerCase();


            if (tekst.includes(zoekterm)) {

                kaart.style.display = "block";

            } else {

                kaart.style.display = "none";

            }

        });

    });

}



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




// Willekeurig weetje

function willekeurigWeetje() {


    let nummer = Math.floor(
        Math.random() * weetjesDatabase.length
    );


    let weetje = weetjesDatabase[nummer];


    alert(
        "💡 Wist je dat...\n\n" +
        weetje.titel +
        "\n\n" +
        weetje.tekst
    );



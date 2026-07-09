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


}



// Automatisch extra weetjes laden

function laadWeetjes() {


    let container = document.getElementById("weetjes");


    if (!container) return;



    weetjesDatabase.forEach(function(weetje) {


        let kaart = document.createElement("section");


        kaart.className = 
        "kaart " + weetje.categorie;



        kaart.innerHTML = `

        <h2>${weetje.titel}</h2>

        <p>
        ${weetje.tekst}
        </p>

        `;



        container.appendChild(kaart);


    });


}



// Start website

window.onload = function() {

    laadWeetjes();

};

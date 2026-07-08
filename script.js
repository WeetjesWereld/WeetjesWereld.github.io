function filter(categorie){

    let kaarten=document.querySelectorAll(".kaart");


    kaarten.forEach(kaart=>{

        if(categorie==="alles" || kaart.classList.contains(categorie)){
            kaart.style.display="block";
        }
        else{
            kaart.style.display="none";
        }

    });

}



document.getElementById("search").addEventListener("keyup",function(){

    let zoek=this.value.toLowerCase();

    document.querySelectorAll(".kaart").forEach(kaart=>{

        let tekst=kaart.innerText.toLowerCase();


        if(tekst.includes(zoek)){
            kaart.style.display="block";
        }
        else{
            kaart.style.display="none";
        }

    });

});

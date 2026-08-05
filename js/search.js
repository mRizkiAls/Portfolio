function initSearch(){

    const input = document.getElementById("search");

    if(!input) return;

    input.addEventListener("keyup",()=>{

        const value = input.value.toLowerCase();

        const cards = document.querySelectorAll(".project-card,.skill-card");

        cards.forEach(card=>{

            const text = card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}
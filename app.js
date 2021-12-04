let btnSubmit=document.querySelector(".btnsbmt");
let mainContainer=document.querySelector(".container");
let inputValue=document.querySelector(".inputsb");



btnSubmit.addEventListener('click',()=>{




    let card=createCard(inputValue.value);


    mainContainer.appendChild(card);

    inputValue.value="";


     
})
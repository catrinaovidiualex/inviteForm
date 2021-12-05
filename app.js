let btnSubmit=document.querySelector(".btnsbmt");
let mainContainer=document.querySelector(".container");
let inputValue=document.querySelector(".inputsb");
let confirmationInv=document.querySelector(".generalcf");
let unconfirmedInv=document.querySelector(".generalcf");
let deletecard=document.querySelector(".btnremove");


btnSubmit.addEventListener('click',()=>{

    let card=createCard(inputValue.value);

    mainContainer.appendChild(card);

    inputValue.value="";
     
})


let flag=0;

confirmationInv.addEventListener('click',(e)=>{

    let obj=e.target;

    if(obj.checked){


        checkedConfirmed();
    }else{

      unCheckedConfirmed();
    }
    


})

deletecard.addEventListener('click',(e)=>{

    let allcards=document.querySelector(".container").children; 
    allcards=e.target;

    for (let i=0;i<allcards.length;i++){
   
        if(allcards[i].classList.contains("btnremove")){
            let card=allcards[i].parentNode;
            deletecard.removeChild(card);
     }
    }
})








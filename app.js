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

mainContainer.addEventListener('click', handle);












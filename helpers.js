function createCard(numele){

    // declaram div-ul pp 
    let div1=document.createElement('div');
    div1.classList.add("pp");
  

    //declaram elementele care apartin div-ului .pp;
    let paragraf1=document.createElement("p");
    paragraf1.classList.add("paragraf");
    //textul din paragraf este acelasi cu valoarea din functie;
    paragraf1.textContent=numele;


    let divc1=document.createElement('div');
    divc1.classList.add("c1");
   
    let label1=document.createElement("label");
    label1.classList.add("cflabel");
    label1.textContent="Confirmed";
    

    let input1=document.createElement("input");
    input1.classList.add("cf");
    input1.type="checkbox";
  

    let divc2=document.createElement('div');
    divc2.classList.add("c2");


    let btnedit1=document.createElement("button");
    btnedit1.classList.add("btnedit");
    btnedit1.textContent="edit";
    

    let btnremove1=document.createElement("button");
    btnremove1.classList.add("btnremove");
    btnremove1.textContent="remove";
    

    /// legam elementele de div-ul .pp;
    div1.appendChild(paragraf1);

    // label si input sunt copii pt div c1;
    divc1.appendChild(label1);
    divc1.appendChild(input1);
    div1.appendChild(divc1);

    //butoanele sunt copii pt div c2;
    divc2.appendChild(btnedit1);
    divc2.appendChild(btnremove1);
    div1.appendChild(divc2);

    //afisam div-ul nou creat;
    return div1;

}





///functie ce o apelam cand este apasat butonul de confirmare pt persoana respectiva;
function checkedConfirmed(){

let allcards=document.querySelector(".container").children; //salvez fiecare card din container

    for(let i=0;i<allcards.length;i++){
        let obj=allcards[i].querySelector(".cf");
        if(obj.checked==false){
        allcards[i].style.display="none";
        }
        
    }
}

function unCheckedConfirmed(){
    let allcards=document.querySelector(".container").children; 


    for (let i=0;i<allcards.length;i++){

        
            allcards[i].style.display="block";
    }

}



//obj este butonul de remove
let  pressRemove=(obj)=>{

    let card=obj.parentNode.parentNode;
    
    //console.log(card);

    let mainContainer=document.querySelector(".container");

    mainContainer.removeChild(card);

    

}

let handle=(e)=>{
    let obj=e.target;
         if(obj.classList.contains("btnremove")){
             
               pressRemove(obj);

         }else if(obj.classList.contains("btnedit")){


                pressEdit(obj);
         }
}


let pressEdit=(obj)=>{
    let card=obj.parentNode.parentNode;

    let p=card.querySelector(".paragraf");
    //cream un input 
    //inauntru lui punem valoarea din paragraf
    //apoi stergem paragrafu
    let newinput=document.createElement('input');
    

          
    newinput.value=p.textContent;


    card.insertBefore(newinput,p);
    
    
    card.removeChild(p);


    let edit=card.querySelector(".btnedit");


    edit.classList.add("save");

    edit.classList.remove("btnedit");

    edit.textContent="save";
   


}


let pressSave=(obj)=>{

    let card=obj.parentNode.parentNode;
    let newinput1=document.querySelector(".paragraf");
    newinput1.type='p';

    let edit1=card.querySelector(".btnedit");
    edit1.classList.remove("save");
    edit1.textContent="edit";
    
}
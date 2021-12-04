

function createCard(numele){

    // declaram div-ul pp 
    let div1=document.createElement('div');
    div1.classList.add(".pp");
  

    //declaram elementele care apartin div-ului .pp;
    let paragraf1=document.createElement("p");
    paragraf1.classList.add(".paragraf");
    //textul din paragraf este acelasi cu valoarea din functie;
    paragraf1.textContent=numele;
   
    let label1=document.createElement("label");
    label1.classList.add(".cflabel");
    label1.textContent="Confirmed";
    

    let input1=document.createElement("input");
    input1.classList.add(".cf");
  

    let btnedit1=document.createElement("button");
    btnedit1.classList.add(".btnedit");
    btnedit1.textContent="edit";
    

    let btnremove1=document.createElement("button");
    btnremove1.classList.add(".btnremove");
    btnremove1.textContent="remove";
    

    /// legam elementele de div-ul .pp;
    div1.appendChild(paragraf1);
    div1.appendChild(label1);
    div1.appendChild(input1);
    div1.appendChild(btnedit1);
    div1.appendChild(btnremove1);

    //afisam div-ul nou creat;
    return div1;

}


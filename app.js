let chckbox=document.querySelector(".generalcf");
let container=document.querySelector(".container");

//toate tagurile din div
let textfrombox = document.querySelector(".pp");
let prgf=document.querySelector(".paragraf");
let lbl=document.querySelector(".cflabel");
let confirmedbox=document.querySelector(".cf");
let btnedit=document.querySelector(".btnedit");
let btnremove=document.querySelector(".btnremove");
let inputsbm=document.querySelector(".inputsb");

//addaugare persoana -> butonul submit
let btnsubmit=document.querySelector(".btnsbmt");


let flag=1;

chckbox.addEventListener("change", ()=>{

    
    
        if(flag==0 && confirmedbox.checked==true){
            textfrombox.style.display = "block";
            /*prgf[i].style.display = "block";
            lbl[i].style.display = "block";
            confirmedbox[i].style.display = "block";
            btnedit[i].style.display = "block";
            btnremove[i].style.display = "block";*/

            flag=1;
        } 
            
        else {
            textfrombox.style.display = "none";
           /*prgf[i].style.display = "none";
            lbl[i].style.display = "none";
            confirmedbox[i].style.display = "none";
            btnedit[i].style.display = "none";
            btnremove[i].style.display = "none";*/
            flag=0;
        }
     
})



btnsubmit.addEventListener("click", ()=>{

    let elemdiv=document.createElement("div");

    if(inputsbm.value!=="")
    {
    
    elemdiv.textContent=inputsbm.value;

    attachbuttons(elemdiv);

    textfrombox.append(elemdiv);
    inputsbm.value="";
   
    }
    


})


function attachbuttons(bts){

    bts.classList.add("cflabel");
    let lbl1=document.createElement('label');
    lbl1.textContent="Confirmed";
    bts.appendChild(lbl1); 

    bts.classList.add("cf");
    let conf1=document.createElement('input');
    conf1.type="checkbox";
    bts.appendChild(conf1);


    bts.classList.add("btnedit");
    let btn1=document.createElement('button');
    btn1.textContent="edit";
    bts.appendChild(btn1);

    bts.classList.add("btnremove");
    let btn2=document.createElement('button');
    btn2.textContent="remove";
    bts.appendChild(btn2);
}

textfrombox.addEventListener("click",(d)=>{

    let obj=d.target;
    if(obj.classList.contains("btnremove")){
        let card=obj.parentNode;
        textfrombox.removeChild(card);
    }

})



    



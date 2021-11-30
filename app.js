let chckbox=document.getElementById('generalcf');
let container=document.querySelector(".container");

//toate tagurile din div
let textfrombox = document.getElementById('pp');
let prgf=document.getElementById('paragraf');
let lbl=document.getElementById('cflabel');
let confirmedbox=document.getElementById('cf');
let btnedit=document.getElementById('btnedit');
let btnremove=document.getElementById('btnremove');


let flag=1;

chckbox.addEventListener("change", ()=>{

    
    
        if(flag==0 && confirmedbox.checked==false){
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


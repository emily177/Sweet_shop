window.onload= function()
{
    const x=document.getElementById('bara_unica');
    
    const outbuton=document.createElement('div');
    const buton=document.createElement("button");
    buton.innerText='Click me';
    buton.setAttribute("type","button");
    buton.onclick = function(){Range()};
    outbuton.appendChild(buton);
   
    let nr_localStorage=document.createElement("p");
    const newtext=document.createTextNode("Apasa-ti butonul daca vreti sa alegeti un pret maxim de incadrare a comenzii\n");
    x.appendChild(newtext);
    x.appendChild(outbuton);
    x.appendChild(nr_localStorage);

    const bara=document.createElement("input");
    bara.setAttribute("type","range");
    
    localStorage.clickcount=0;
    let p = 0;
    
    function Range()
    {
        if(p!=0)
        {
            p =0;
            x.removeChild(bara);
            x.removeChild(x.lastElementChild);
        }
        else
        {
            x.appendChild(bara);
            bara.setAttribute("min",100);
            bara.setAttribute("max",1000);
            bara.setAttribute("value",200);
            p=1;  
            const numar=bara.value;
            let afisnumar=document.createElement('div');
            afisnumar.innerHTML=numar;
            x.appendChild(afisnumar);
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        }
          nr_localStorage.innerHTML = localStorage.clickcount;
       
    }

    const d = new Date();
    let data=document.createElement('div');
    data.innerHTML = d;
    
    let sub_buton=document.getElementById("trimite");
    sub_buton.appendChild(data);
    
}
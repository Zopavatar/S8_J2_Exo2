let h1 = document.querySelector("h1");

h1.addEventListener('dblclick',()=>{
    h1.style = "background: red; color: white";
})


let h3 = document.querySelector("h3");

h3.addEventListener('mouseover',()=>{
    h3.style = "font-size: 18px";
})

h3.addEventListener('mouseout',()=>{
    h3.style = "font-size: 19px";
})


let p = document.querySelector("p");

p.addEventListener('click',()=>{ 
    
    if(p.style.background == "blue" && p.style.color == "gold"){
        p.style = "background: white; color: black;";
    } else {
        p.style = "background: blue; color: gold;"; 
    }
})

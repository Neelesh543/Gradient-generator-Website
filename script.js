let button1= document.getElementById("button1");
let button2 = document.getElementById("button2");
let cssCode = document.querySelector(".cssCode");

// console.log(cssCode);

const hexCode = () => {

    let sum = "0123456789abcdef";
    let colors = "#"
    for (let i = 0; i < 6; i++) {

       colors = colors + sum[ Math.floor(Math.random()*16)] ;
    }
 
   return colors;
}

let handleButton1 = ()=>{
     rgb1= hexCode();
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    cssCode.innerHTML = ` background-image: linear-gradient(to right,${rgb1},${rgb2})`;
    button1.innerHTML = rgb1;
    button1.style.backgroundColor = rgb1;
}

let handleButton2 = ()=>{
     rgb2= hexCode();
     document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
     cssCode.innerHTML = ` background-image: linear-gradient(to right,${rgb1},${rgb2})`;
     button2.innerHTML = rgb2;
     button2.style.backgroundColor = rgb2;
   
}

// 
button1.addEventListener("click", handleButton1)
button2.addEventListener("click", handleButton2)

cssCode.addEventListener("click", () =>{
    navigator.clipboard.writeText(cssCode.innerText);
    cssCode.title.innerText="copied"
})

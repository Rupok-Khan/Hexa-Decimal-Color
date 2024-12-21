// window.onload=()=>{
//  main();
// }
// function color(){
//     let red=Math.floor(Math.random()*255);
//     let gren=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     return `rgb(${red},${gren},${blue})`;
// }
// function main(){
//     let change=document.getElementById("btn");
//     change.addEventListener("click",function(){
//     let color_1=color();
//     let box=document.getElementById("box");
//     box.style.backgroundColor=color_1;
//     })
    

    
    
// }

let buton=document.getElementById("btn");
buton.addEventListener("click", function(){
    let color_1=color();
    let box=document.getElementById("box");
    box.style.backgroundColor=color_1;
    let text=document.getElementById("code");
    text.value=color_1;
})
let copy_btn=document.getElementById("copy");
copy_btn.addEventListener("click", function(){
    let text1=document.getElementById("code");
    navigator.clipboard.writeText(text1.value);
});

function color(){
        let red=Math.floor(Math.random()*255);
        let gren=Math.floor(Math.random()*255);
        let blue=Math.floor(Math.random()*255);
        return `#${red.toString(16)}${gren.toString(16)}${blue.toString(16)}`;
    }

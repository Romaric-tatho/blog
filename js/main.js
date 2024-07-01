const hamburger=document.querySelector('.hamburger');
const close=document.querySelector('.close-menu')
const header=document.querySelector('header');
const navbar=document.querySelector('.navbar');
const connecter=document.querySelector('.se-connecter')
console.log(hamburger);

// hamburger.addEventListener('click',()=>{
//     hamburger.style.visibility="hidden";
//     hamburger.style.visibility="visible";
//     header.style.height="350px";
//     navbar.style.display="inline-block";
//     connecter.style.display="block";

// })

function Hamburger(){
    hamburger.style.visibility="hidden";
    close.style.visibility="visible";
    header.style.height="350px";
    navbar.style.display="inline-block";
    connecter.style.display="block";

}

function closemenu(){
    hamburger.style.visibility="visible";
    close.style.visibility="hidden";
    header.style.height="0px";
    navbar.style.display="inline-block";
    connecter.style.display="block";
}
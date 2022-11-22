var iconbar= document.querySelector(".fa-bars");
var list= document.querySelector(".list");

iconbar.addEventListener("click",()=>{
    iconbar.classList.toggle("fa-xmark");
    list.classList.toggle("active"); 
});

var iconbar= document.querySelector(".fa-bars");
var list= document.querySelector(".list");

iconbar.addEventListener("click",()=>{
    list.classList.toggle("active"); 
});
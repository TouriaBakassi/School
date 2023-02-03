// Open and Close the Navbar-list 
var iconbar= document.querySelector(".fa-bars");
var list= document.querySelector(".list");

iconbar.addEventListener("click",()=>{
    iconbar.classList.toggle("fa-xmark");
    list.classList.toggle("active"); 
});
// ...................................... Emailjs Pour la formulaire
const btn = document.getElementById('button');
const form= document.getElementById("form");
 form.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';
   
   const serviceID = 'default_service';
   const templateID = 'template_u82rcjr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert(' Sent by Success! ✅✅');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
// ................................... AOS Initialize  
AOS.init();
// ..................................................................................
let totop=document.querySelector('.mini-triangle');

window.addEventListener('scroll',()=>{
  if (window.scrollY > 140) {
  totop.classList.add('show');
  }else{
    totop.classList.remove('show');
  };
});

// .....Loader Page
let loader=document.querySelector(".loader");
  window.addEventListener("load",()=>{
    setTimeout(() => {
   loader.style.display="none";   
    }, 400);
});
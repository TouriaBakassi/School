

// Open and Close the Navbar-list 
var iconbar= document.querySelector(".fa-bars");
var list= document.querySelector(".list");

iconbar.addEventListener("click",()=>{
    iconbar.classList.toggle("fa-xmark");
    list.classList.toggle("active"); 
});
//  Counter-Up for Numbers
$('.count').counterUp({
    delay: 5,
    time: 1500
});
// Slides the Testimonials with "Slick"
$('.testimonials').slick({
    delay:10,
    dots:true,
    arrows: true, 
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

// ............................ Localstorge for Courses-Like
var like1=document.querySelector('#Like-cour1');
var like2=document.querySelector('#Like-cour2');
var like3=document.querySelector('#Like-cour3');

var cour1=document.querySelector('#cour1');
var cour2=document.querySelector('#cour2');
var cour3=document.querySelector('#cour3');

let count1= localStorage.getItem("cour1")==null?0:localStorage.getItem("cour1");
let count2= localStorage.getItem("cour2")==null?0:localStorage.getItem('cour2');
let count3= localStorage.getItem("cour3")==null?0:localStorage.getItem("cour3");

cour1.textContent=count1;
cour2.textContent=count2;
cour3.textContent=count3;

like1.addEventListener("click",()=>{
cour1.textContent=++count1;
like1.style.color="red";
localStorage.setItem("cour1",count1);
});
like2.addEventListener("click",()=>{
    cour2.textContent=++count2;
    like2.style.color="red"
    localStorage.setItem("cour2",count2);
});
like3.addEventListener("click",()=>{
cour3.textContent=++count3;
like3.style.color="red";
localStorage.setItem("cour3",count3);
});

// ...........................  Localstorge for Courses-Follow
var follow1=document.querySelector('#follow-cour1');
var follow2=document.querySelector('#follow-cour2');
var follow3=document.querySelector('#follow-cour3');

var flwcour1=document.querySelector('#follow1');
var flwcour2=document.querySelector('#follow2');
var flwcour3=document.querySelector('#follow3');

let stor1= localStorage.getItem("flwcour1")==null?0:localStorage.getItem("flwcour1");
let stor2= localStorage.getItem("flwcour2")==null?0:localStorage.getItem('flwcour2');
let stor3= localStorage.getItem("flwcour3")==null?0:localStorage.getItem("flwcour3");

flwcour1.textContent=stor1;
flwcour2.textContent=stor2;
flwcour3.textContent=stor3;

follow1.addEventListener('click',()=>{
    flwcour1.textContent=++stor1;
    follow1.style.color="green";
    localStorage.setItem("flwcour1",stor1);
});
follow2.addEventListener('click',()=>{
    flwcour2.textContent=++stor2;
    follow2.style.color="green";
    localStorage.setItem("flwcour2",stor2);
});
follow3.addEventListener('click',()=>{
    flwcour3.textContent=++stor3;
    follow3.style.color="green";
    localStorage.setItem("flwcour3",stor3);
});
// .......................... Emailjs Pour la formulaire

let fullname= document.querySelector("#fullName").value;
let emailo= document.querySelector("#email_id").value;
let subjecto= document.querySelector("#subject").value;
let messagee= document.querySelector("#message").value
function sendMail(){
    // event.preventDefault();
var params={ 
    from_name : fullname,
    email_id : emailo,
    subject : subjecto,
    message :  messagee
}
emailjs.send("service_offjmqy","template_u82rcjr", params)
// .then(function(res) {
//     alert('Success!'+ res.status);
// });
};

document.querySelector(".send").addEventListener("submit",sendMail());

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



// Open and Close the Navbar-list 
let iconbar= document.querySelector(".fa-bars");
let list= document.querySelector(".list");

iconbar.addEventListener("click",()=>{
    iconbar.classList.toggle("fa-xmark");
    list.classList.toggle("active"); 
});

//  Counter-Up for Numbers
$('.count').counterUp({
    delay: 5,
    time: 500
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

// ................................ AOS 
AOS.init();

// ..................................................................................
let like1=document.querySelector('#Like-cour1');
let like2=document.querySelector('#Like-cour2');
let like3=document.querySelector('#Like-cour3');

let cour1=document.querySelector('#cour1');
let cour2=document.querySelector('#cour2');
let cour3=document.querySelector('#cour3');

let count1= localStorage.getItem("cour1")== null ? 0:localStorage.getItem("cour1");
let count2= localStorage.getItem("cour2")== null ? 0:localStorage.getItem('cour2');
let count3= localStorage.getItem("cour3")== null ? 0:localStorage.getItem("cour3");

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
let follow1=document.querySelector('#follow-cour1');
let follow2=document.querySelector('#follow-cour2');
let follow3=document.querySelector('#follow-cour3');

let flwcour1=document.querySelector('#follow1');
let flwcour2=document.querySelector('#follow2');
let flwcour3=document.querySelector('#follow3');

let stor1= localStorage.getItem("flwcour1")== null?0:localStorage.getItem("flwcour1");
let stor2= localStorage.getItem("flwcour2")== null?0:localStorage.getItem('flwcour2');
let stor3= localStorage.getItem("flwcour3")== null?0:localStorage.getItem("flwcour3");

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

























// ............................ Localstorge for Courses-Like
// var LINKS=document.querySelectorAll(".link");
// LINKS.forEach(LINK=>{
//   LINK.addEventListener("click",()=>{
//     LINK.classList.remove("link");
//     LINK.classList.add("link");
//   })
// });
// var page=window.location.pathname;
// console.log(page);
// ...................................................................................

// ...................................... Emailjs Pour la formulaire

// ............................Active link
// const activepage=window.location.pathname;
// console.log(activepage);
// let navlinks=document.querySelectorAll("nav a");
// navlinks.forEach(link=>{
//   if(link.href.includes(`${activepage}`)){
//     link.classList.add("active");
//   }
// })

// $("nav ul li a").each(()=>{
//   $(this).click(function(){
//     $(this).addClass("active").siblings().removeClass("active")
//    })
// })
// ........................................................................................













































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
// .....................................................................


var link=document.querySelectorAll(".link")
var link1=document.querySelector(".link1");
var link2=document.querySelector(".link2");
var link3=document.querySelector(".link3");
var link4=document.querySelector(".link4");
var link5=document.querySelector(".link5");

var iframe=document.querySelectorAll(".iframe")
var iframe1=document.querySelector(".iframe1");
var iframe2=document.querySelector(".iframe2");
var iframe3=document.querySelector(".iframe3");
var iframe4=document.querySelector(".iframe4");
var iframe5=document.querySelector(".iframe5");

link1.addEventListener("click",()=>{
    iframe.forEach(item=>{
        item.classList.remove("open");
    });
    link.forEach(item=>{
        item.style.color="black";;
    });
    link1.style.color="rgb(58, 193, 98)";
    iframe1.classList.add("open");
    like1.style.borderRight = "2px solid rgb(58, 193, 98)";
});

link2.addEventListener("click",()=>{
    iframe.forEach(item=>{
        item.classList.remove("open");
    });
    link.forEach(item=>{
        item.style.color="black";;
    });
    link2.style.color="rgb(58, 193, 98)";
    iframe2.classList.add("open");   
});
link3.addEventListener("click",()=>{
    iframe.forEach(item=>{
        item.classList.remove("open");
    });
    link.forEach(item=>{
        item.style.color="black";;
    });
    link3.style.color="rgb(58, 193, 98)";
    iframe3.classList.add("open");
});
link4.addEventListener("click",()=>{
    iframe.forEach(item=>{
        item.classList.remove("open");
    });
    link.forEach(item=>{
        item.style.color="black";;
    });
    link4.style.color="red";
    iframe4.classList.add("open");
});
link5.addEventListener("click",()=>{
  iframe.forEach(item=>{
      item.classList.remove("open");
  });
  link.forEach(item=>{
      item.style.color="black";
  });
  link5.style.color="red";
  iframe5.classList.add("open");
});
// ............................ Localstorge for Courses-Like
// var LINKS=document.querySelectorAll(".link");
// LINKS.forEach(LINK=>{
//   LINK.addEventListener("click",()=>{
//     LINK.classList.remove("link");
//     LINK.classList.add("link");
//   })
// });
var page=window.location.pathname;
console.log(page);
// ...................................................................................
paypal.Buttons({
  style: {
      layout: 'horizontal',
      color:  'silver',
      shape:  'pill',
      label:  'paypal',
      tagline:false
    },
  createOrder: function(data, actions) {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '0.00'
        }
      }]
    });
  }
}).render('#paypal-button-container1');
paypal.Buttons({
  style: {
      layout: 'horizontal',
      color:  'silver',
      shape:  'pill',
      label:  'paypal',
      tagline:false
    },
  createOrder: function(data, actions) {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '19.00'
        }
      }]
    });
  }
}).render('#paypal-button-container2');
paypal.Buttons({
  style: {
      layout: 'horizontal',
      color:  'silver',
      shape:  'pill',
      label:  'paypal',
      tagline:false
    },
  createOrder: function(data, actions) {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '29.00'
        }
      }]
    });
  }
}).render('#paypal-button-container3');
paypal.Buttons({
  style: {
      layout: 'horizontal',
      color:  'silver',
      shape:  'pill',
      label:  'paypal',
      tagline:false
    },
  createOrder: function(data, actions) {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '49.00'
        }
      }]
    });
  }
}).render('#paypal-button-container4');
// ..................................................................................
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


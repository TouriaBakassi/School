// ................................ AOS 
AOS.init();
// Open and Close the Navbar-list 
let iconbar= document.querySelector(".fa-bars");
let list= document.querySelector(".list");

iconbar.addEventListener("click",()=>{
    iconbar.classList.toggle("fa-xmark");
    list.classList.toggle("active"); 
});

// ...................................................................................
// .............................................Courses Details....................................
let link=document.querySelectorAll(".link")
let link1=document.querySelector(".link1");
let link2=document.querySelector(".link2");
let link3=document.querySelector(".link3");
let link4=document.querySelector(".link4");
let link5=document.querySelector(".link5");

let iframe=document.querySelectorAll(".iframe")
let iframe1=document.querySelector(".iframe1");
let iframe2=document.querySelector(".iframe2");
let iframe3=document.querySelector(".iframe3");
let iframe4=document.querySelector(".iframe4");
let iframe5=document.querySelector(".iframe5");

link1.addEventListener("click",()=>{
    iframe.forEach(item=>{
        item.classList.remove("open");
    });
    link.forEach(item=>{
        // item.style.color="";
        item.classList.remove("active");
    });
    iframe1.classList.add("open");
    link1.classList.add("active");
    // link1.style.color="white";
});

link2.addEventListener("click",()=>{
    iframe.forEach(item=>{
        item.classList.remove("open");
    });
    link.forEach(item=>{
        // item.style.color="";
        item.classList.remove("active");
    });
    iframe2.classList.add("open");
     link2.classList.add("active"); 
    //  link2.style.color="white";
});
link3.addEventListener("click",()=>{
    iframe.forEach(item=>{
        item.classList.remove("open");
    });
    link.forEach(item=>{
        // item.style.color="";
        item.classList.remove("active");
    }); 
    iframe3.classList.add("open");
     link3.classList.add("active");
    // link3.style.color="white";
   
});
link4.addEventListener("click",()=>{
    iframe.forEach(item=>{
        item.classList.remove("open");
    });
    link.forEach(item=>{
        // item.style.color="";
        item.classList.remove("active");
    });
    // link4.style.color="rgb(58, 193, 98)";
    iframe4.classList.add("open");
    link4.classList.add("active"); 
});
link5.addEventListener("click",()=>{
  iframe.forEach(item=>{
      item.classList.remove("open");
  });
  link.forEach(item=>{
      // item.style.color="";
      item.classList.remove("active");
  });
  // link5.style.color="rgb(58, 193, 98)";
  iframe5.classList.add("open");
  link5.classList.add("active"); 
});

// ..................................................................................
// let like1=document.querySelector('#Like-cour1');
// let like2=document.querySelector('#Like-cour2');
// let like3=document.querySelector('#Like-cour3');

// let cour1=document.querySelector('#cour1');
// let cour2=document.querySelector('#cour2');
// let cour3=document.querySelector('#cour3');

// let count1= localStorage.getItem("cour1")==null?0:localStorage.getItem("cour1");
// let count2= localStorage.getItem("cour2")==null?0:localStorage.getItem('cour2');
// let count3= localStorage.getItem("cour3")==null?0:localStorage.getItem("cour3");

// cour1.textContent=count1;
// cour2.textContent=count2;
// cour3.textContent=count3;

// like1.addEventListener("click",()=>{
// cour1.textContent=++count1;
// like1.style.color="red";
// localStorage.setItem("cour1",count1);
// });
// like2.addEventListener("click",()=>{
//     cour2.textContent=++count2;
//     like2.style.color="red"
//     localStorage.setItem("cour2",count2);
// });
// like3.addEventListener("click",()=>{
// cour3.textContent=++count3;
// like3.style.color="red";
// localStorage.setItem("cour3",count3);
// });

// // ...........................  Localstorge for Courses-Follow
// let follow1=document.querySelector('#follow-cour1');
// let follow2=document.querySelector('#follow-cour2');
// let follow3=document.querySelector('#follow-cour3');

// let flwcour1=document.querySelector('#follow1');
// let flwcour2=document.querySelector('#follow2');
// let flwcour3=document.querySelector('#follow3');

// let stor1= localStorage.getItem("flwcour1")== null?0:localStorage.getItem("flwcour1");
// let stor2= localStorage.getItem("flwcour2")== null?0:localStorage.getItem('flwcour2');
// let stor3= localStorage.getItem("flwcour3")== null?0:localStorage.getItem("flwcour3");

// flwcour1.textContent=stor1;
// flwcour2.textContent=stor2;
// flwcour3.textContent=stor3;

// follow1.addEventListener('click',()=>{
//     flwcour1.textContent=++stor1;
//     follow1.style.color="green";
//     localStorage.setItem("flwcour1",stor1);
// });
// follow2.addEventListener('click',()=>{
//     flwcour2.textContent=++stor2;
//     follow2.style.color="green";
//     localStorage.setItem("flwcour2",stor2);
// });
// follow3.addEventListener('click',()=>{
//     flwcour3.textContent=++stor3;
//     follow3.style.color="green";
//     localStorage.setItem("flwcour3",stor3);
// });

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
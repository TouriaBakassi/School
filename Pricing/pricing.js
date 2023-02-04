  // Open and Close the Navbar-list 
let iconbar= document.querySelector(".fa-bars");
let list= document.querySelector(".list");

iconbar.addEventListener("click",()=>{
    iconbar.classList.toggle("fa-xmark");
    list.classList.toggle("active"); 
});
  // ......................................PAYPAL..........................................
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

// ................................ AOS 
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
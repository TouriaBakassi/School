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
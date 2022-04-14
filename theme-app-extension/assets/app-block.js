

function addAllItems(array) {

  var newVariantIdArray = array.split(',');


  var product_data = newVariantIdArray.map(variantId => {
    return {quantity: 1, id: variantId}
  })


  var data = {
    items: product_data
  }
        
  fetch('/cart/add.js', {
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With':'xmlhttprequest'
    },
    method: 'POST'
  }).then((response) => {
    return response.json();
  }).then((json) => {
    /* yay! our products were added - do something here to indicate to the user */
    console.log('products', json)
    window.location.reload();
  }).catch((err) => {
    /* uh oh, we have error. */
    console.error(err)
  });
}

function addAllItemsfromv(id) {

    const val = id.toString();

    var newVariantIdArray = new Array(val);

    var product_data = newVariantIdArray.map(variantId => {
        return {quantity: 1, id: variantId}
      })
    
    
      var data = {
        items: product_data
      }
            
      fetch('/cart/add.js', {
        body: JSON.stringify(data),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With':'xmlhttprequest'
        },
        method: 'POST'
      }).then((response) => {
        return response.json();
      }).then((json) => {
        /* yay! our products were added - do something here to indicate to the user */
        console.log('products', json)
        window.location.reload();
      }).catch((err) => {
        /* uh oh, we have error. */
        console.error(err)
      });

      
    
  }


function myfunction()   
 {   
document.write("welcome to Javatpoint");  
         }  
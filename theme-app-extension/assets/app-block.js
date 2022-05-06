

function removeItemFromCart(id) {
          
  const val = id.toString();

    var newVariantIdArray = new Array(val);

    var product_data = newVariantIdArray.map(variantId => {
        return {quantity: 0, id: variantId}
      })
    
    
      jQuery.post('/cart/update.js', {updates: {val: 0}})
      .done(function() {
        console.log("success");
        window.location.reload();
      })
      .fail(function() {
        console.log("error");
        document.write("welcome to Javatpoint");  
      })
      .always(function() {
        console.log("complete");
        document.write("welcome to Javatpoint");  
      });


}

function addItemToCart(id) {

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
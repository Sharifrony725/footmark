import {disCheckoutQuan, carte, matchingItem, disWishQuan} from "./data.js";
import { product } from "./products.js";
let deliveryFee = 0;
let deliveryFeeDsp = 'Free'
disCheckoutQuan();
displayCart()
disWishQuan();

function displayCart(){
  let cartSummary = ''
  let totalPrice = 0
  carte.forEach((cartItem) =>{
    const productId = cartItem.id
    let matchingItem;
    product.forEach((product) =>{
      if(productId == product.productId){
        matchingItem = product
      }
    })

    totalPrice += (matchingItem.price * cartItem.quantity)
    
    cartSummary += `
    <tr>
      <td class = "remove-item"><i class="far fa-times-circle"></i></td>
      <td><img class = "cart-img" src="${matchingItem.image}"></td>
      <td>${matchingItem.name}</td>
      <td>N${matchingItem.price}</td>
      <td><p>${cartItem.quantity}</p></td>
      <td>${cartItem.quantity * matchingItem.price}</td>
    </tr>  
    `
  });
  let finalPrice = totalPrice + deliveryFee;


  document.querySelector('.cart-total').innerHTML = `N${totalPrice}`;
  document.querySelector('.shipping-fee').innerHTML = deliveryFeeDsp;
  document.querySelector('.final-fee').innerHTML = `<strong>N${finalPrice}</strong>`
  if(carte.length == 0){
    document.querySelector('.section-p1').innerHTML = '<h2>No Items In Cart</h2>';
    document.querySelector('.clear-cart').innerHTML = 'Shop Now';
    document.querySelector('.clear-cart').addEventListener('click', ()=>{
      window.location.href = 'shop.html';
    })
    
  }else{
    document.querySelector('.cart-content').innerHTML = cartSummary;
    document.querySelector('.cart-total').innerHTML = `N${totalPrice}`;
    document.querySelector('.shipping-fee').innerHTML = deliveryFeeDsp;
    document.querySelector('.final-fee').innerHTML = `<strong>N${finalPrice}</strong>`
  }


  let removeBtn = document.querySelectorAll('.remove-item');
  removeBtn.forEach((btn, buttonIndex) =>{
    btn.addEventListener('click', () =>{
      console.log('clicked')
      carte.forEach((cartItem, cartIndex) =>{
        if(buttonIndex == cartIndex){
          carte.splice(cartIndex,1)
          localStorage.setItem('carte', JSON.stringify(carte));
          disCheckoutQuan();
          displayCart();
          console.log(carte)
        }
      
      });
    })
  })
}

let clearBtn = document.querySelector('.clear-cart');
clearBtn.addEventListener('click', () =>{
  carte.length = 0;
  disCheckoutQuan();
  localStorage.removeItem('carte');
  deliveryFee = 0;
  deliveryFeeDsp = 'Free';
  displayCart();
});


let delOption = document.querySelector('.delivery-option');
let delOptionBtn = document.querySelector('.delivery-option-button');

delOptionBtn.addEventListener('click', ()=>{
  if(carte.length == 0){
    if(delOption.value == 'Standard Delivery(10 days)'){
      deliveryFee = 0;
      deliveryFeeDsp = 'Free';
    }
    if(delOption.value == 'Express Delivery(4 days)'){
      deliveryFee = 0;
      deliveryFeeDsp = 'N0';
    }
    if(delOption.value == 'VIP Delivery (1 day)'){
      deliveryFee = 0;
      deliveryFeeDsp = 'N0';
    }   
    displayCart()
  }else{
    if(delOption.value == 'Standard Delivery(10 days)'){
      deliveryFee = 0;
      deliveryFeeDsp = 'Free';
    }
    if(delOption.value == 'Express Delivery(4 days)'){
      deliveryFee = 3000;
      deliveryFeeDsp = 'N3000';
    }
    if(delOption.value == 'VIP Delivery (1 day)'){
      deliveryFee = 5500;
      deliveryFeeDsp = 'N5500';
    }   
    displayCart()
  }

});

let imageLink = document.querySelectorAll('.cart-img');
imageLink.forEach((link, index) =>{
  link.addEventListener('click', () =>{
    product.forEach((product) =>{
      if(carte[index].id == product.productId){
        matchingItem.value = product;
        localStorage.setItem('matchingItem', JSON.stringify(matchingItem.value));
        console.log(matchingItem.value);
        window.location.href = 's-product.html';
      }
    })
  })
});

/*let imageLink = document.querySelectorAll('.clear-cart');
imageLink.forEach((link) =>{
  link.addEventListener('click', () =>{
    //window.location.href = 's-product.html';

    let productId = link.dataset.productId; 
  });  
});*/











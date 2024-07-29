import { wishList,addToWishlist,disCheckoutQuan, carte, disWishQuan } from "./data.js";
import { product } from "./products.js";
displayWish();
disWishQuan();
disCheckoutQuan();


function displayWish(){
  let wishSummary = '';
  wishList.forEach((wishItem) =>{
    const productId = wishItem.id
    let matchingItem;
    product.forEach((product) =>{
      if(productId == product.productId){
        matchingItem = product;
      }
    })
    
    wishSummary += `
    <tr>
      <td class = "remove-item"><i class="far fa-times-circle"></i></td>
      <td><img class = "cart-img" src="${matchingItem.image}"></td>
      <td>${matchingItem.name}</td>
      <td>N${matchingItem.price}</td>
      <td><button class= "wish-add-cart">Add to Cart</button></td>
    </tr>  
    `
  });

  if(wishList.length == 0){
    document.querySelector('.section-p1').innerHTML = '<h2>No Items In Wishlist</h2>';
    document.querySelector('.clear-wishlist').innerHTML = 'Shop Now';
    document.querySelector('.clear-wishlist').addEventListener('click', ()=>{
      window.location.href = 'shop.html';
    })
    
  }else{
    document.querySelector('.wish-list-content').innerHTML = wishSummary;
  }

  let removeBtn = document.querySelectorAll('.remove-item');
  removeBtn.forEach((btn, buttonIndex) =>{
    btn.addEventListener('click', () =>{
      console.log('clicked')
      wishList.forEach((wishItem, cartIndex) =>{
        if(buttonIndex == cartIndex){
          wishList.splice(cartIndex,1)
          localStorage.setItem('wishList', JSON.stringify(wishList));
          disWishQuan();
          displayWish();
        }
      
      });
    })
  })

}

let clearBtn = document.querySelector('.clear-wishlist');
clearBtn.addEventListener('click', () =>{
  wishList.length = 0;
  disWishQuan();
  localStorage.removeItem('wishList');
  displayWish();
 
});

let addBtn = document.querySelectorAll('.wish-add-cart');
addBtn.forEach((button, index) =>{
  button.addEventListener('click', ()=>{
    let matchingCartItem;
    let prodId = wishList[index].id;
    
    carte.forEach((item) =>{
      if(item.id == prodId){
        matchingCartItem = item
      }
    });

    if(matchingCartItem){
      matchingCartItem.quantity +=1;
    }else{
      carte.push({
        id : prodId,
        quantity : 1
      });
    }
    localStorage.setItem('carte', JSON.stringify(carte));
    disCheckoutQuan()

  });
});

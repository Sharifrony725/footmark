export let matchingItem = {value: JSON.parse(localStorage.getItem('matchingItem'))};
export let carte = JSON.parse(localStorage.getItem('carte'));
export let wishList = JSON.parse(localStorage.getItem('wishList'));

if(!carte){
  carte = [];
}

if(!wishList){
  wishList = []
}

export function disCheckoutQuan(){
  let checkoutQuantity = 0;
  carte.forEach((cartItem) =>{
    checkoutQuantity += cartItem.quantity;
  });
 let cartAmount = document.querySelectorAll('.cart-quantity');
 cartAmount.forEach((amount) =>{
  amount.innerHTML = checkoutQuantity
 });
}

export function disWishQuan(){
  let wishQuantity = 0;
  wishList.forEach((wishItem) =>{
    wishQuantity += wishItem.quantity;
  })
  document.querySelector('.wish-list-quantity').innerHTML = wishQuantity;
}

export function addToCart(){
  let addCart = document.querySelectorAll('.add-to-cart');
  addCart.forEach((addCart) =>{
    addCart.addEventListener('click', () =>{
      let matchingCartItem;
      let productId = addCart.dataset.prodId;

      carte.forEach((carItem) =>{
        if(carItem.id == productId){
          matchingCartItem = carItem;
        }
      });
      
      if(matchingCartItem){
        matchingCartItem.quantity +=1;
      }else{
        carte.push({
          id : productId,
          quantity : 1
        });
      }
      localStorage.setItem('carte', JSON.stringify(carte));
      disCheckoutQuan()
  });
});
}

export function addToWishlist(){
  let addCart = document.querySelectorAll('.add-to-wishlist');
  addCart.forEach((addCart) =>{
    addCart.addEventListener('click', () =>{
      let matchingWishlistItem;
      let productId = addCart.dataset.prodId;

      wishList.forEach((wishItem) =>{
        if(wishItem.id == productId){
          matchingWishlistItem = wishItem;
        }
      });
      if(matchingWishlistItem){
        matchingWishlistItem.quantity +=0;
      }else{
        wishList.push({
          id : productId,
          quantity : 1
        });
      }
      localStorage.setItem('wishList', JSON.stringify(wishList));
      disWishQuan()
  });
});
}


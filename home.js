import { product } from "./products.js";
import { matchingItem, carte, disCheckoutQuan,addToCart, addToWishlist,disWishQuan} from "./data.js";
let fProd = product.slice(0, 8);
let futuredProductHtml = '';

fProd.forEach((product) =>{
  futuredProductHtml +=`
  <div class="pro">
    <div class="favourite"><i class="fa-solid fa-heart add-to-wishlist" data-prod-id = "${product.productId}"></i></div>
    <img class= "pro-image" src = "${product.image}"  data-product-id = "${product.productId}">
    <div class="pro-des">
      <p class="product-name">${product.name}</p>
      <p class="brand">${product.brand}</p>
      <div class="pro-des2">
        <div class="rating-price">
          <img class="rating-image" src="img/icons/rating-50.png" alt="">
          <p class="price"><span>N</span>${product.price}</p>
        </div>
        <div>
          <i class="fa-solid fa-shopping-cart add-to-cart" data-prod-id = "${product.productId}"></i>
        </div>
      </div>
    </div>
  </div>
  `
})
document.querySelector('.pro-container').innerHTML= futuredProductHtml;


let imageLink = document.querySelectorAll('.pro-image');
imageLink.forEach((link) =>{
  link.addEventListener('click', () =>{
    window.location.href = 's-product.html';
    let productId = link.dataset.productId; 
    product.forEach((product) =>{
      if(productId === product.productId){
        matchingItem.value = product;
        localStorage.setItem('matchingItem', JSON.stringify(matchingItem.value));
        console.log(matchingItem.value)
      }
    });
  });  
});

addToCart()
disCheckoutQuan()

addToWishlist()
disWishQuan()



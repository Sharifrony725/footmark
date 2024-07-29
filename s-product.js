import { matchingItem, disCheckoutQuan, addToCart, carte, disWishQuan,addToWishlist} from "./data.js";
import { product } from "./products.js";
let fProd = product.slice(0, 8)
let futuredProductHtml = ''
disWishQuan();

document.getElementById('prodetails').innerHTML = `
    <div class="single-pro-image">
    <img src="${matchingItem.value.image}" width="100%" id="main-img" alt="">
    <div class="small-image-group">
      <div class="small-image-col">
        <img src="${matchingItem.value.image2}" width="100%" class="small-image" alt="">
      </div>
      <div class="small-image-col">
        <img src="${matchingItem.value.image3}" width="100%" class="small-image" alt="">
      </div>
      <div class="small-image-col">
        <img src="${matchingItem.value.image4}" width="100%" class="small-image" alt="">
      </div>
      <div class="small-image-col">
        <img src="${matchingItem.value.image}" width="100%" class="small-image" alt="">
      </div>
    </div>
    </div>
    <div class="single-pro-details">
    <h6>${matchingItem.value.brand}</h6>
    <h4>${matchingItem.value.name}</h4>
    <h2>N${matchingItem.value.price}</h2>
    <select>
      <option>Select Size</option>
      <option>36</option>
      <option>38</option>
      <option>40</option>
      <option>42</option>
      <option>44</option>
    </select>
    <input class= "item-num"  type="number" min= 1 value="1">
    <button class="add-to-class" data-prod-id = "${matchingItem.value.productId}">Add to Cart</button>
    <h4>Product Details</h4>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
    </span>
    </div>



`

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
document.querySelector('.pro-container').innerHTML = futuredProductHtml;


let mainImg = document.getElementById('main-img');
let smallImg = document.querySelectorAll('.small-image');

smallImg.forEach((img) => {
  img.addEventListener('click', () =>{
    mainImg.src = img.src;
  });
});



let addToCartS = document.querySelector('.add-to-class');
addToCartS.addEventListener('click', () =>{
  let matchingCartItem;
  let productId = addToCartS.dataset.prodId
  let num = Number(document.querySelector('.item-num').value);
  carte.forEach((carItem) =>{
    if(carItem.id == productId){
      matchingCartItem = carItem;
    }
  });
  if(matchingCartItem){
    matchingCartItem.quantity += num;
  }else{
    carte.push({
      id : productId,
      quantity : num
    });
  }
  localStorage.setItem('carte', JSON.stringify(carte));
  disCheckoutQuan()
  console.log(carte);

});


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

disCheckoutQuan()
addToCart()
addToWishlist()


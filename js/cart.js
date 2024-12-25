// Open the Cart Page
var cartAndWishlist = {
  cart: document.querySelector(".cart"),
  wishlist: document.querySelector(".wishlist"),
};

function openAndCloseCartAndWishList(element) {
  cartAndWishlist[element].classList.toggle("active");
}

// Add item in Cart
var allProductsFromJSON = [];

document.addEventListener("DOMContentLoaded", function () {
  async function getAllDataFromApi() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      allProductsFromJSON = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  getAllDataFromApi();
});

var itemContainerInCart = document.querySelector(".itemsInCart");
var productsInCart = JSON.parse(localStorage.getItem("userData")).cart || [];

function addToCart(productId, thiselement) {
  if (!localStorage.getItem("userData")) {
    window.location.href = "../Pages/login.html";
    return;
  }

  let product = allProductsFromJSON.find((p) => p.id === productId);
  let existingProduct = productsInCart.find((p) => p.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    productsInCart.push(product);
  }

  saveCartToLocalStorage();
  getCartInItems();
}

// Select some elements from home page
let countItemsinRedBubble = document.querySelector(".countItem");
let countInsideCart = document.querySelector(".countItemsInsideCart");
let priceBsideCartInHeader = document.querySelector(".priceCartHead");
let priceInsideCart = document.querySelector(".totalPriceOfCart");

// Function to get elements from API data to use in add and remove
function getCartInItems() {
  let totalPriceInHeader = 0;
  let itemCart = "";

  if (productsInCart.length === 0) {
    itemCart = `<img src="../images/empty-shopping-cart.jpg" alt="Cart is empty" style="width: 100%;height: 100%; margin-top: 15%;" />`;
    countInsideCart.innerHTML = "Your cart is empty";
    priceBsideCartInHeader.innerHTML = "$ 0";
    priceInsideCart.innerHTML = "$ 0";
    countItemsinRedBubble.innerHTML = 0;
  } else {
    productsInCart.forEach((product, i) => {
      let productTitle = product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title;
      itemCart += `
        <div class="cartItems">
          <img src=${product.image} onclick="productDetailsFromCart(${i})" alt="product Image">
          <div class="content">
            <h4 class="productTitle" onclick="productDetailsFromCart(${i})">${productTitle}</h4>
            <p class="itemPrice">$${product.price}</p>
            <div class="quantityContainer">
              <button onclick="updateQuantity(${i}, 'decrease')" class="quantityBtn">-</button>
              <span>${product.quantity}</span>
              <button onclick="updateQuantity(${i}, 'increase')" class="quantityBtn">+</button>
            </div>
          </div>
          <button onclick="removeFromCart(${i})" class="deletItemIcon"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
      totalPriceInHeader += product.price * product.quantity;
    });

    countInsideCart.innerHTML = `(<span style="color:red;font-weight:bolder;"> ${productsInCart.length} </span> Item in the Cart)`;
    priceBsideCartInHeader.innerHTML = "$ " + totalPriceInHeader.toFixed(2);
    priceInsideCart.innerHTML = "$ " + totalPriceInHeader.toFixed(2);
    countItemsinRedBubble.innerHTML = productsInCart.length;
  }

  itemContainerInCart.innerHTML = itemCart;
}

// Update item quantity in Cart
function updateQuantity(index, action) {
  if (action === "increase") {
    productsInCart[index].quantity += 1;
  } else if (action === "decrease" && productsInCart[index].quantity > 1) {
    productsInCart[index].quantity -= 1;
  }
  saveCartToLocalStorage();
  getCartInItems();
}

// Remove item from Cart
function removeFromCart(index) {
  productsInCart.splice(index, 1);
  saveCartToLocalStorage();
  getCartInItems();
}

function saveCartToLocalStorage() {
  var userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    userData.cart = [...productsInCart];
    localStorage.setItem("userData", JSON.stringify(userData));
  }}

function loadCartFromLocalStorage() {
  getCartInItems();
}

document.addEventListener("DOMContentLoaded", function () {
  loadCartFromLocalStorage();
});

function productDetailsFromCart(index) {
  let product = productsInCart[index];
  window.location.href = `productDetails.html?id=${product.id}`;
}

// Wishlist
var itemContainerInWishList = document.querySelector(".itemsInwishlist");
var productsInWishList = JSON.parse(localStorage.getItem("userData")).fev || [];

function addToWishList(productId, thiselement) {
  if (!localStorage.getItem("userData")) {
    window.location.href = "../Pages/login.html";
    return;
  }

  let product = allProductsFromJSON.find((p) => p.id === productId);
  let existingProduct = productsInWishList.find((p) => p.id === productId);

  if (existingProduct) {
    thiselement.classList.add("active");
  } else {
    thiselement.classList.add("active");
    productsInWishList.push(product);
  }

  saveWishListToLocalStorage();
  getWishListItems();
  updateWishListCounters();
}

let countItemsinRedBubbleForWishList = document.querySelector(".countItemWishList");
let countInsideWishList = document.querySelector(".countItemsInsideWishList");
let priceInsideWishList = document.querySelector(".totalPriceOfWishList");

function activateWishListFeatures() {
  getWishListItems();
  updateWishListCounters();
}

function addToCartFromWishList(index) {
  let product = productsInWishList[index];
  addToCart(product.id);
  removeFromWishList(index);
}

document.addEventListener("DOMContentLoaded", function () {
  activateWishListFeatures();
});

function saveWishListToLocalStorage() {
  var userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    userData.fev = productsInWishList;
    localStorage.setItem("userData", JSON.stringify(userData));
  }
}

function getWishListItems() {
  let itemWishList = "";
  let totalPriceInWishList = 0;

  if (productsInWishList.length === 0) {
    itemWishList = `<img src="../images/empty-shopping-cart.jpg" alt="Wishlist is empty" style="width: 100%;height: 100%; margin-top: 15%;" />`;
    countInsideWishList.innerHTML = "Your wishlist is empty";
    countItemsinRedBubbleForWishList.innerHTML = 0;
    priceInsideWishList.innerHTML = "$ 0";
  } else {
    productsInWishList.forEach((product, i) => {
      let productTitle = product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title;
      itemWishList += `
        <div class="wishlistItems">
          <img src=${product.image} onclick="productDetailsFromCart(${i})" alt="product Image">
          <div class="content">
            <h4 class="productTitle" onclick="productDetailsFromCart(${i})">${productTitle}</h4>
            <p class="itemPrice">$${product.price}</p>
            <button class="addToCardInWishList addToCartBtn" onclick="addToCartFromWishList(${i})">Add to Cart</button>
          </div>
          <button onclick="removeFromWishList(${i})" class="deletItemIcon"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
      totalPriceInWishList += product.price;
    });

    countInsideWishList.innerHTML = `(<span style="color:red;font-weight:bolder;"> ${productsInWishList.length} </span> Item in the Wishlist)`;
    priceInsideWishList.innerHTML = "$ " + totalPriceInWishList.toFixed(2);
    countItemsinRedBubbleForWishList.innerHTML = productsInWishList.length;
  }

  itemContainerInWishList.innerHTML = itemWishList;
}

function removeFromWishList(index) {
  productsInWishList.splice(index, 1);
  saveWishListToLocalStorage();
  getWishListItems();
  updateWishListCounters();
}

function updateWishListCounters() {
  countItemsinRedBubbleForWishList.innerHTML = productsInWishList.length;
  countInsideWishList.innerHTML = `(<span style="color:red;font-weight:bolder;"> ${productsInWishList.length} </span> Item in the Wishlist)`;
  let totalPriceInWishList = productsInWishList.reduce((total, product) => total + product.price, 0);
  priceInsideWishList.innerHTML = "$ " + totalPriceInWishList.toFixed(2);
}


document.querySelector(".cartButton a").addEventListener("click", function (event) {
  if (productsInCart.length > 0) {
    window.location.href = "../Pages/shipping.html";
    productsInCart = [];
    saveCartToLocalStorage();
  } else {
    event.preventDefault();
    alert("Your cart is empty. Please add items to your cart before proceeding to checkout.");
  }
});
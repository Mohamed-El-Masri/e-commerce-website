document.querySelector("header").innerHTML = ` <div class="header_top">
            <p class="header_top_left">
                
            </p>
        </div>

        <nav>
            <div class="container">
                <div class="logo">
                    <a href="home.html"><img src="../images/logo.png" alt="logo"></a>
                </div>
                <ul>
                    <li><a class="active" href="home.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="search">
                    <input type="text" placeholder="Search">
                    <button>Search</button>
                </div>

                <div class="cartHeader">
                    <div class="wishlistIcon" onclick="openAndCloseCartAndWishList ('wishlist')">
                        <i class="fa-solid fa-heart"></i>
                        <span class="countItemWishList">0</span>
                    </div>
                    <div onclick="openAndCloseCartAndWishList ('cart')" class="cartIcon">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="countItem">0</span>
                    </div>
                    <!-- Price beside the Cart in Header -->
                    <div class="totalPrice">
                        <p class="priceCartHead">$0</p>
                    </div>
                </div>
            </div>

        </nav>`;

document.querySelector(".wishlist").innerHTML = ` <span onclick="openAndCloseCartAndWishList ('wishlist')" class="bgOverLay"></span>
        <div class="topwishlist">
            <h3>My wishlist <span class="countItemsInsideWishList">(0 Item in the wishlist)</span></h3>
            <span class="closewishlist" onclick="openAndCloseCartAndWishList ('wishlist')"><i
                    class="fa-regular fa-circle-xmark"></i></span>
        </div>

        <!-- --------------------------------------------------------items inside the wishlist-------------------------------------------------------- -->
        <div class="itemsInwishlist">

            <div class="emptywishlist">
                <img src="../images/empty-shopping-cart.jpg" alt="emptywishlist"
                    style="width: 100%;height: 100%; margin-top: 15%;">
            </div>

            <!-- product in click from json by ID -->
        </div>

        <!-- bottom part in wish list -->
        <div class="bottomWishList">
            <div class="total">
                <p>Cart subtotal</p>
                <p class="totalPriceOfWishList">$0</p>
            </div>
        </div> `;

document.querySelector(".cart").innerHTML = ` <span onclick="openAndCloseCartAndWishList ('cart')" class="bgOverLay"></span>
        <div class="topCart">
            <h3>My Cart <span class="countItemsInsideCart">(0 Item in the Cart)</span></h3>
            <span class="closeCart" onclick="openAndCloseCartAndWishList ('cart')"><i
                    class="fa-regular fa-circle-xmark"></i></span>
        </div>

        <!-- --------------------------------------------------------items inside the cart-------------------------------------------------------- -->
        <div class="itemsInCart">

            <div class="emptyCart">
                <img src="../images/empty-shopping-cart.jpg" alt="emptyCart"
                    style="width: 100%;height: 100%; margin-top: 15%;">
            </div>

            <!-- product in click from json by ID -->
        </div>
        <!-- --------------------------------------------------------bottom part inside the cart-------------------------------------------------------- -->
        <div class="bottomCart">
            <div class="total">
                <p>Cart subtotal</p>
                <p class="totalPriceOfCart">$0</p>
            </div>
            <div class="cartButton">
                <a href="#" class="catBtn">Proceed to checkout</a>
                <button class="catBtn bgTrans">shop Now</button>
            </div>
        </div> `;

document.querySelector("footer").innerHTML = `  <div class="footer-top">
            <div class="container">
                <div class="footer-column">
                    <!-- قسم عن ShopEase -->
                    <div class="footer-section">
                        <h5>About ShopEase</h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press Releases</a></li>
                            <li><a href="#">ShopEase Cares</a></li>
                        </ul>
                    </div>
                    <!-- قسم دعم العملاء -->
                    <div class="footer-section">
                        <h5>Customer Service</h5>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Returns & Refunds</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Track Order</a></li>
                        </ul>
                    </div>
                    <!-- قسم السياسة والشروط -->
                    <div class="footer-section">
                        <h5>Policies</h5>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Cookies Policy</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                    <!-- قسم التواصل الاجتماعي -->
                    <div class="footer-section">
                        <h5>Connect With Us</h5>
                        <ul class="social-links">
                            <li><a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>&copy; 2024 ShopEase. All rights reserved.</p>
            </div>
        </div>`;

     
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
document.addEventListener("DOMContentLoaded", function () {
  let header_top = document.querySelector(".header_top");
  let userData = JSON.parse(localStorage.getItem("userData"));
  if (header_top && userData) {
    header_top.innerHTML = `
     <div class="container ">
                <p class="header_top_left">
                    Wellcome <span> ${userData.username}</span>
                </p>
                 <ul class="header_top_right">
                    <li>
                    <button class="logoutBtn" onclick="logout()">Logout </button>
                    </li>
                </ul>
            </div>

    `;
  } else {
    header_top.innerHTML = `
              <div class="container ">
                <p class="header_top_left">
                    Shop With 50% discount see our products
                </p>
                <ul class="header_top_right">
                    <li><a href="login.html">Login</a></li>
                    <p id= "spliter"> | </p>
                    <li><a href="register.html">Register</a></li>
                </ul>
            </div>
    `;
  }
});

function logout() {
  localStorage.removeItem("userData");
  window.location.href = "home.html";
}

function sheppingOrder() {
  let userData = JSON.parse(localStorage.getItem("userData"));

  if (userData) {
    userData.cart = [];

    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "home.html";
  } else {
    window.location.href = "login.html";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "login.html") {
    document.querySelector('ul li a[href="login.html"]').classList.add('non-active');
    document.querySelector("ul li a[href='register.html']").style.cssText = "margin-right: 1.5rem; font-weight: bold;"
    document.querySelector('#spliter').classList.add('non-active');
  } else if (currentPage === "register.html") {
    document.querySelector("ul li a[href='register.html']").classList.add('non-active');
    document.querySelector('ul li a[href="login.html"]').style.cssText = "margin-right: 1.5rem; font-weight: bold;"
    document.querySelector('#spliter').classList.add('non-active');
  }
});

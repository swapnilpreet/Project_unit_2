var cartData = JSON.parse(localStorage.getItem("cart"));
  console.log(cartData);
  
  var total = cartData.reduce(function (sum, elem, index, arr) {
   
   // console.log(elem.price.slice(1));
    return sum+=Number(elem.price.slice(1));
   // sum = sum + parseInt(elem.price);
  //  if(isNaN(sum)) return sum+(+elem.price.slice(1));
   // return sum;
  },0)
  document.querySelector("#amt").innerHTML = '$'+total;
  
  localStorage.setItem("cartTotalVal", JSON.stringify(total));
  
  cartData.map(function (elem, index) {
    var box = document.createElement("div");
    box.setAttribute("id", "cartdiv");

    var img = document.createElement("img");
    img.src = elem.image;
    img.setAttribute("id", "cartImg");

    var name = document.createElement("p");
    name.textContent = elem.name;
    name.setAttribute("id", "cartName");

    var price = document.createElement("p");
    price.innerText = elem.price;
    price.setAttribute("id", "cartprice");
    // var btn = document.createElement("button");
    // btn.innerText = "Remove";
    // btn.addEventListener("click", function () {
    //   removeItem(elem, index);
    // });
    var h = document.createElement("hr");
    box.append(img, name, price);

    document.querySelector("#cartItem").append(box);
  });
  document.querySelector("#cross").addEventListener("click", cancleFunction);
  function cancleFunction(){
    document.querySelector("#overviewcart").innerHTML = "";
    window.location.href="index.html";
  }
  document.querySelector("#check").addEventListener("click", checkFunction);
  function checkFunction(){
    window.location.href="OrderConfirmPage.html";
  }
  
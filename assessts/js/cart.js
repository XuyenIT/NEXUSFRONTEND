let arrayProduct = [
  {
    id: 1,
    title: "Cap Quang",
    price: 1000,
    description: "Ben va dep",
    image: "./assessts/images/cap/cap3.jpg"
  },
  {
    id: 2,
    title: "Module X1",
    price: 2000,
    description: "Ben va dep",
    image: "./assessts/images/cap/cap3.jpg"
  },
  {
    id: 3,
    title: "Module X2",
    price: 1000,
    description: "Ben va dep",
    image: "./assessts/images/cap/cap1.jpg"
  },
  {
    id: 4,
    title: "Module X3",
    price: 1000,
    description: "Ben va dep re",
    image: "./assessts/images/cap/cap2.jpg"
  },

];

function displayProduct(){
  let output ='';
  arrayProduct.forEach((product,index)=>{
    output +=`
    <div class="col-lg-3 mb-4">
    <div class="card card__product">
      <img src="${product.image}" alt="" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title card-title--product">${product.title}</h5>
        <h5 class="card-price">${product.price}</h5>
        <p class="card-text card__description--product">${product.description}</p>
        <div style="display: flex;">
          <a style="margin: auto;" href="product_detail.html" class="btn btn-outline-success btn-sm">Read More</a>
          <a style="margin: auto;" href="#" class="addCard btn btn-outline-success btn-sm">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
    `
  })
  //out put to main__card--product
  document.querySelector(".main__card--product").innerHTML = output;
  $(".addCard").click(addCard);

}

displayProduct(arrayProduct);


function displayCart() {
  let output = '';
  // let totalCart = 0;
  // let totalQty = 0;
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (cart == null) {
    cart = [];
  }
  // let totalPrice = cart.reduce((total, p) => total + p.price * p.quantity, 0);
  cart.forEach((product, index) => {
    output += `                
      <tr>
          <td>${product.title}</td>
          <td>${product.price}</td>
          <td><img src = "${product.image}" width=100/></td>
          <td>
          <td><div class = "input-group"><button data-index = "${index}" class = "minus-item btn btn-primary">-</button>
                        <input name = "quantity" type = "number" min = "1"  class = "item-count form-control" data-index = "${index}" value = "${element.quantity}"/>
                        <button data-index = "${index}" class = "plus-item btn btn-primary">+</button></div></td>
                        <td><button data-index = "${index}" class='delete-item btn btn-danger'>X</button></td>
          </td>
      </tr>`;
    $(".show-card").html(output);
  })
}
function addCard(e) {
  e.preventDefault();
  let Jobs = [
   {
     id:1,
     name:"Xuyen"
   }

  ]
  localStorage.setItem('jobs',JSON.stringify(Jobs));
  
}


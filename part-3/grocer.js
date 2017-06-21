var modal = document.getElementById('cartModal')
var cartBtn = document.getElementById('cart-button')
var span = document.getElementsByClassName('close')[0]

var cartItems = []
var priceItems = []

var count = 0
var cartPrice = 0

cartBtn.onclick = function() {
  modal.style.display = 'block'
}

span.onclick = function() {
  modal.style.display = 'none'
}

window.onclick = function() {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

function addToCart(addThing, price) {
  cartItems.push(addThing)
  priceItems.push('$' + price)
  cartPrice += price
  count++
  document.getElementById('cart-item-count').innerHTML = `(${count})`
}

function showGroceryList() {
  document.getElementsByClassName('groceryItemList')[0].innerHTML = ""
  document.getElementsByClassName('groceryPriceList')[0].innerHTML = ""
  var itemContainer = document.getElementsByClassName('groceryItemList')[0]
  var priceContainer = document.getElementsByClassName('groceryPriceList')[0]

  for (var i = 0; i < cartItems.length; i++) {
    var li = document.createElement("li")
    var li2 = document.createElement("li")
    li.innerText = cartItems[i]
    li2.innerText = priceItems[i]
    itemContainer.appendChild(li)
    priceContainer.appendChild(li2)
  }
}

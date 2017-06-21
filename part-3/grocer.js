var modal = document.getElementById('cartModal')
var cartBtn = document.getElementById('cart-button')
var span = document.getElementsByClassName('close')[0]

var cartItems = []
var priceItems = []

var count = 0
var cartPrice = 0

cartBtn.onclick = function() {
  modal.style.display = 'block'
  showGroceryList()
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
  document.getElementsByClassName('grocery-item-list')[0].innerHTML = ''
  document.getElementsByClassName('grocery-price-list')[0].innerHTML = ''
  var itemContainer = document.getElementsByClassName('grocery-item-list')[0]
  var priceContainer = document.getElementsByClassName('grocery-price-list')[0]

  for (var i = 0; i < cartItems.length; i++) {
    var li = document.createElement('li')
    var li2 = document.createElement('li')
    li.innerText = cartItems[i]
    li2.innerText = priceItems[i]
    itemContainer.appendChild(li)
    priceContainer.appendChild(li2)
  }
}

function clearItems() {
  count = 0
  cartPrice = 0
  cartItems = []
  cartPrice = []
  document.getElementById('cart-item-count').innerHTML = `(${count})`
  modal.style.display = 'none'
}

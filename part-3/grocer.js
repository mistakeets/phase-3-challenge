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

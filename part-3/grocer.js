var modal = document.getElementById('cartModal')
var cartBtn = document.getElementById('cart-button')
var span = document.getElementsByClassName('close')[0]

cartBtn.onclick = function() {
  modal.style.display = 'block'
}

span.onclick = function() {
  modal.style.display = 'none'
}

window.onclick = function() {
  if (event.targel == modal) {
    modal.style.display = 'none'
  }
}

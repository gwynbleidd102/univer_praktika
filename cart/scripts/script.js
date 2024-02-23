let cart = {
  sisls23: {
    name: "first",
    count: 1,
  },
  pqmry28: {
    name: "second",
    count: 1,
  },
};

document.onclick = (event) => {
  if (event.target.classList.contains("plus")) {
    plusFunc(event.target.dataset.id);
  }
  if (event.target.classList.contains("minus")) {
    minusFunc(event.target.dataset.id);
  }
};

const plusFunc = (id) => {
  cart[id]["count"]++;
  renderCart();
};

const minusFunc = (id) => {
  if (cart[id]["count"] - 1 == 0) {
    deleteCart(id);
    return true;
  }
  cart[id]["count"]--;
  renderCart();
};

const renderCart = () => {
  console.log(cart);
};

const deleteCart = (id) => {
  delete cart[id];
  renderCart();
};

renderCart();

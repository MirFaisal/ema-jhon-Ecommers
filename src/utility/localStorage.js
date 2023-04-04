export const addToDb = (id) => {
  const shoppingCart = getStoredCart();

  const quantity = shoppingCart[id];

  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export const getStoredCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export const removeFromLoacl = (id) => {
  const shoppingCart = getStoredCart();
  if (shoppingCart) {
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

export const clearCart = () => {
  localStorage.removeItem("shopping-cart");
};

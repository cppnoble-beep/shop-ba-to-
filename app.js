async function loadProducts() {
  const response = await fetch('products.json');
  const products = await response.json();
  return products;
}

async function loadOrders() {
  const response = await fetch('orders.json');
  const orders = await response.json();
  return orders;
}
let orders = [
  {
    id: "order_1",
    item: "Laptop",
    quantity: 1,
    status: "shipped"
  }
];

function listOrders() {
  return orders;
}

function getOrder(id) {
  return orders.find(order => order.id === id) || null;
}

function createOrder(data) {
  const newOrder = { id: `order_${Date.now()}`, ...data };
  orders.push(newOrder);
  return newOrder;
}

function replaceOrder(id, data) {
  const index = orders.findIndex(order => order.id === id);
  if (index === -1) return null;
  orders[index] = { id, ...data };
  return orders[index];
}

function updateOrder(id, data) {
  const order = getOrder(id);
  if (!order) return null;
  Object.assign(order, data);
  return order;
}

function deleteOrder(id) {
  const index = orders.findIndex(order => order.id === id);
  if (index === -1) return false;
  orders.splice(index, 1);
  return true;
}

module.exports = {
  listOrders,
  getOrder,
  createOrder,
  replaceOrder,
  updateOrder,
  deleteOrder
};

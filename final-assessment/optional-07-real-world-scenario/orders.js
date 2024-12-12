// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items = []) {
  orders.push({
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: items.reduce((acc, item) => acc + item.price, 0),
    status: "Menunggu",
  });
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  for (let order of orders) {
    if (order.id === orderId) {
      order.status = status;
    }
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  let total = 0;
  for (let order of orders) {
    if (order.status === "Selesai") {
      total += order.totalPrice;
    }
  }

  return total;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === id) {
      orders.splice(i, 1);
    }
  }
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};

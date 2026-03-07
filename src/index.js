const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const {
  listOrders,
  getOrder,
  createOrder,
  replaceOrder,
  updateOrder,
  deleteOrder
} = require("./data");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/orders", (req, res) => {
  res.json(listOrders());
});

app.get("/orders/:id", (req, res) => {
  const order = getOrder(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
});

app.post("/orders", (req, res) => {
  const newOrder = createOrder(req.body);
  res.status(201).json(newOrder);
});

app.put("/orders/:id", (req, res) => {
  const updatedOrder = replaceOrder(req.params.id, req.body);
  if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
  res.json(updatedOrder);
});

app.patch("/orders/:id", (req, res) => {
  const updatedOrder = updateOrder(req.params.id, req.body);
  if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
  res.json(updatedOrder);
});

app.delete("/orders/:id", (req, res) => {
  const success = deleteOrder(req.params.id);
  if (!success) return res.status(404).json({ message: "Order not found" });
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("Order API is running on http://localhost:3000");
});

# Order API Sample

This repository contains:

- An OpenAPI 3 specification for a simple Order API.
- A Node.js / Express sample implementation with in-memory data.
- A GitHub Actions CI workflow to run on pushes and pull requests.

## Prerequisites

- Node.js >= 18
- npm >= 8

## Install & Run

```bash
npm install
npm start
```

## Endpoints

- `GET /orders` – List orders
- `POST /orders` – Create an order
- `GET /orders/{id}` – Retrieve an order by ID
- `PUT /orders/{id}` – Replace order
- `PATCH /orders/{id}` – Update order partially
- `DELETE /orders/{id}` – Delete an order

The full API specification is under `openapi/order-api.yaml`.

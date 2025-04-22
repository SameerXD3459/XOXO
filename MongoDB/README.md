npm run dev

POST http://localhost:4545/products
{
  "name": "Apple Watch",
  "price": 299
}

GET http://localhost:4545/products

PUT http://localhost:4545/products/:id
{
  "name": "Apple Watch",
  "price": 399
}

DELETE http://localhost:4545/products/:id
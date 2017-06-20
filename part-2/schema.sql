DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store;

CREATE TABLE item (
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(50),
  item_price DECIMAL(10,2),
  item_section VARCHAR(50)
);

CREATE TABLE shopper (
  shopper_id SERIAL PRIMARY KEY,
  shopper_name VARCHAR(50),
  phone VARCHAR(25),
  street_address VARCHAR(100),
  state VARCHAR(2),
  zipcode INTEGER
);

CREATE TABLE grocery_order (
  order_id SERIAL PRIMARY KEY,
  order_date DATE,
  shopper_id INTEGER REFERENCES shopper (shopper_id)
);

CREATE TABLE grocery_orderdetail (
  order_id INTEGER REFERENCES grocery_order (order_id),
  item_id INTEGER REFERENCES item (item_id)
  PRIMARY KEY (order_id, item_id)
);

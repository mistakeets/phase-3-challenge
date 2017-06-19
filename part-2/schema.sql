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
  shopper_name VARCHAR(50)
);

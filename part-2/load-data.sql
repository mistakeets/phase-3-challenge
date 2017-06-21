\c grocery_store

COPY grocery_item (name, price, section)
FROM '/Users/koppel/Documents/LG/lgProjects/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

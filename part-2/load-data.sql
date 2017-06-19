\c grocery_store

COPY item (item_name, item_price, item_section)
FROM '/Users/koppel/Documents/LG/lgProjects/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

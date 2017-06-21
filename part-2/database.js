const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({ database: 'grocery_store' })

const allItems = () => {
  return db.any('SELECT * FROM grocery_item')
}

const itemsInSection = section => {
  return db.any('SELECT item_id, name FROM grocery_item WHERE section = $1', section)
}

const cheapItems = () => {
  return db.any('SELECT item_id, name, price FROM grocery_item WHERE price < 10 ORDER BY price ASC')
}

const countItemsInSection = section => {
  return db.any('SELECT COUNT(*) FROM grocery_item WHERE section = $1', section)
}

const mostRecentOrders = () => {
  return db.any('SELECT order_id, order_date FROM grocery_order ORDER BY order_date DESC LIMIT 10')
}

const lastShopperName = () => {
  return db.any('SELECT shopper_name FROM grocery_order JOIN shopper ON grocery_order.shopper_id=shopper.shopper_id ORDER BY order_date DESC LIMIT 1')
}

module.exports = {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection,
  mostRecentOrders,
  lastShopperName
}

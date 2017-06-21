const pgp = require('pg-promise')()
const db = pgp({ database: 'grocery_store' })

const allItems = () =>
  db.query('SELECT * FROM item')

const itemsInSection = section =>
  db.query('SELECT item_id, item_name FROM item WHERE item_section = $1', section)

const cheapItems = () =>
  db.query('SELECT item_id, item_price FROM item WHERE item_price < 10 ORDER BY item_price ASC')

const countItemsInSection = section =>
  db.query('SELECT COUNT(*) FROM item WHERE item_section = $1', section)

const mostRecentOrders = () =>
  db.query('SELECT order_id, order_date FROM grocery_order ORDER BY order_date DESC LIMIT 10')

const lastShopperName = () =>
  db.query('SELECT shopper_id FROM grocery_order ORDER BY order_date DESC LIMIT 1')
  .then(answer => {
    return answer[0].shopper
  })

module.exports = {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection,
  mostRecentOrders,
  lastShopperName
}

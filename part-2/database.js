const pgp = require('pg-promise')()
const db = pgp({ database: 'grocery_store' })

const allItems = () =>
  db.query('SELECT * FROM item')

const itemsInSection = section =>
  db.query('SELECT item_id, item_name FROM item WHERE item_section = $1', section)

const cheapItems = () =>
  db.query('SELECT item_id, item_price FROM item WHERE item_price < \'$10.00\' ORDER BY item_price')

module.exports = {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection,
  mostRecentOrders,
  lastShopperName,
  orderTotal
}

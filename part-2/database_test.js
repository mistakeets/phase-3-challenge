const chai = require('chai')
const expect = chai.expect
const dbQuery = require('./database')

describe('itemsInSection(bulk)', () => {
  it('returns items Flour Pasta Rice', done => {
    dbQuery.itemsInSection('bulk')
      .then(item => {
        expect(item[0].name).to.equal('Flour')
        expect(item[1].name).to.equal('Pasta')
        expect(item[2].name).to.equal('Rice')
        done()
      })
      .catch(err => {
        console.log(err)
      })
    done()
  })
})

describe('cheapItems()', () => {
  it('returns the item Fish as first item and Honey as last item', done => {
    dbQuery.cheapItems()
      .then(item => {
        expect(item[0].name).to.equal('Fish')
        expect(item[item.length - 1].name).to.equal('Honey')
        done()
      })
      .catch(err => {
        console.log(err)
      })
    done()
  })
})

describe('countItemsInSection(packaged)', () => {
  it('countItemsInSection packaged returns 5', done => {
    dbQuery.countItemsInSection('packaged')
      .then(item => {
        expect(item[0].count).to.equal('5')
        done()
      })
      .catch(err => {
        console.log(err)
      })
    done()
  })
})

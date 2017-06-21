const chai = require('chai')
const expect = chai.expect
const dbQuery = require('./database')

describe('itemsInSection(bulk) test', () => {
  it('returns items Flour Pasta Rice', done => {
    dbQuery.itemsInSection('bulk').then(items => {
        expect(items[0].name).to.equal('Flour')
        expect(items[1].name).to.equal('Pasta')
        expect(items[2].name).to.equal('Rice')
        done()
      })
      .catch(err => {
        console.error(err)
        done()
      })
  })
})

describe('cheapItems() test', () => {
  it('returns the first item Fish and last item Honey', done => {
    dbQuery.cheapItems().then(items => {
        expect(items[0].name).to.equal('Fish')
        expect(items[items.length - 1].name).to.equal('Honey')
        done()
      })
      .catch(err => {
        console.error(err)
        done()
      })
  })
})

describe('countItemsInSection(packaged) test', () => {
  it('returns 5 as the item count', done => {
    dbQuery.countItemsInSection('packaged').then(items => {
        expect(items[0].count).to.equal('5')
        done()
      })
      .catch(err => {
        console.error(err)
        done()
      })
  })
})

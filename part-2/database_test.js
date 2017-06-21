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
      .catch(console.log)
    done()
  })
})

// it('cheapItems returns Fish as the first item and Honey as the last item', done => {
//   cheapItems().then(answers => {
//       expect(answers[0].price).to.equal('$0.49')
//       expect(answers[answers.length - 1].price).to.equal('$9.31')
//       done()
//     })
//     .catch(console.log)
// })
// })

// it('countItemsInSection packaged returns 5', done => {
//   countItemsInSection('packaged').then(answer => {
//       expect(answer).to.equal('5')
//       done()
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })

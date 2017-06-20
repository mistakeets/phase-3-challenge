const chai = require('chai')
const expect = chai.expect
const { itemsInSection, cheapItems, countItemsInSection } = require('./database.js')

it('items in section bulk returns Flour Pasta and Rice', done => {
  itemsInSection('bulk').then(answers => {
      const things = answers.map(answer => answer.thing)
      expect(things).to.include('Flour')
      expect(things).to.include('Pasta')
      expect(things).to.include('Rice')
      done()
    })
    .catch(err => {
      console.log(err)
      done()
    })
})

it('cheapItems returns Fish as the first item and Honey as the last item', done => {
  cheapItems().then(answers => {
      expect(answers[0].price).to.equal('$0.49')
      expect(answers[answers.length - 1].price).to.equal('$9.31')
      done()
    })
    .catch(err => {
      console.log(err)
      done()
    })
})

it('countItemsInSection packaged returns 5', done => {
  countItemsInSection('packaged').then(answer => {
      expect(answer).to.equal('5')
      done()
    })
    .catch(err => {
      console.log(err)
      done()
    })
})

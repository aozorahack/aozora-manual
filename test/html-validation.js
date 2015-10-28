const
  w3cjs = require('w3cjs'),
  showError = (res) => {
    const messages = res.messages
      .filter(c => c.type == 'error')
      .map(c => `  [${ c.lastLine }:${ c.lastColumn }] ${ c.message }`)

    if (messages.length) {
      messages.forEach(c => console.log(c))
      throw 'html errors have been found'
    }
  }

describe('html validation', function () {
  it('index.html should have no html errors', done =>
    w3cjs.validate({
      file: 'index.html',
      callback: res => { showError(res); done() }
    }))
  it('index-input.html should have no html errors', done =>
    w3cjs.validate({
      file: 'index-input.html',
      callback: res => { showError(res); done() }
    }))
  it('index-proofreading.html should have no html errors', done =>
    w3cjs.validate({
      file: 'index-proofreading.html',
      callback: res => { showError(res); done() }
    }))
})

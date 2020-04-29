var hello = require('./hello.js');
var expect = require('chai').expect;

describe('hello', function() {
  it('输出hello', function() {
    expect(hello()).to.be.equal("Hello Node");
  });
});


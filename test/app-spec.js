var chai = require('chai');
var expect = chai.expect;
var module = require('../app');
var bowlingScoreCalc = new BowlingScoreCalc();



describe('currentScore', function () {

  it('should be a number', function () {
    expect(frame).to.be.a('number');
  });

  it('should keep add non spare/strike scores together', function () {

  });

  it('should add a bonus for spare', function () {

  });

  it('should add a bonus for strike', function () {

  });

});

describe('frame', function () {

  it('should be a number', function () {
    expect(frame).to.be.a('number');
  });

  it('should keep track of simple frame status', function () {

  });

  it('should keep track of frame status with strike', function () {

  });

});

describe('bowlingScore', function () {

  it('should be a function', function () {
    expect(bowlingScore).to.be.a('function');
  });


});


describe('spare', function () {

  it('should be a function', function () {
    expect(spare).to.be.a('function');
  });

});

describe('strike', function () {

  it('should be a function', function () {
    expect(strike).to.be.a('function');
  });

});
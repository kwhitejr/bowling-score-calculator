var chai = require('chai');
var expect = chai.expect;
var module = require('../app');
var bowlingScore = module.bowlingScore;
var spare = module.spare;
var strike = module.strike;
var frame = module.frame;

describe('bowlingScore', function () {

  it('should be a function', function () {
    expect(bowlingScore).to.be.a('function');
  });


});

describe('frame', function () {

  it('should be a number', function () {
    expect(frame).to.be.a('number');
  });

  it('should keep track of frame status', function () {
    var pinsDown1 = [1, 2, 3];
    var pinsDown2 = [4, 5, 6];
    var pinsDown3 = [1, 2, 3, 4, 5];
    var pinsDown4 = [6, 7, 8, 9, 10];
    var pinsDown5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    bowlingScore(pinsDown1);
    bowlingScore(pinsDown2);
    bowlingScore(pinsDown3);
    bowlingScore(pinsDown4);
    bowlingScore(pinsDown5);
    expect(frame).to.equal(3);
  });

});

describe('spare', function () {

  it('should be a function', function () {
    expect(spare).to.be.a('function');
  });

  it('bonus amount to current score is equal to amount of next bowl', function () {
    var currentScore = 23;
    var nextBowl = 5;
    expect(bowlingScore(currentScore, nextBowl)).to.equal(38);
  });



});

describe('strike', function () {

  it('should be a function', function () {
    expect(strike).to.be.a('function');
  });

});
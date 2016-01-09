var chai = require('chai');
var expect = chai.expect;
var module = require('../app');
var bowlingScore = module.bowlingScore;
var spare = module.spare;
var strike = module.strike;
var frame = module.frame;
var currentScore = module.currentScore;
var frameTracker = module.frameTracker;


describe('currentScore', function () {

  it('should be a number', function () {
    expect(frame).to.be.a('number');
  });

  it('should keep add non spare/strike scores together', function () {
    var pinsDown1 = [1, 2, 3];
    var pinsDown2 = [4, 5, 6];
    var pinsDown3 = [1, 2, 3];
    var pinsDown4 = [6, 7, 8];
    var pinsDown5 = [1, 2, 3];
    var pinsDown6 = [4, 5, 6];
    bowlingScore(pinsDown1, pinsDown2);
    bowlingScore(pinsDown3, pinsDown4);
    bowlingScore(pinsDown5, pinsDown6);
    expect(currentScore).to.equal(18);
  });

  it('should add a bonus for spare', function () {
    var pinsDown1 = [1, 2, 3];
    var pinsDown2 = [4, 5, 6];
    var pinsDown3 = [1, 2, 3, 4, 5];
    var pinsDown4 = [6, 7, 8, 9, 10];
    var pinsDown5 = [1];
    var pinsDown6 = [2];
    bowlingScore(pinsDown1, pinsDown2);
    bowlingScore(pinsDown3, pinsDown4);
    bowlingScore(pinsDown5, pinsDown6);
    expect(currentScore).to.equal(19);
  });

  it('should add a bonus for strike', function () {
    var pinsDown1 = [1, 2, 3];
    var pinsDown2 = [4, 5, 6];
    var pinsDown3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var pinsDown4 = [1];
    var pinsDown5 = [2];
    bowlingScore(pinsDown1, pinsDown2);
    bowlingScore(pinsDown3, pinsDown4);
    bowlingScore(pinsDown5, pinsDown6);
    expect(currentScore).to.equal(20);
  });

});

describe('frame', function () {

  it('should be a number', function () {
    expect(frame).to.be.a('number');
  });

  it('should keep track of simple frame status', function () {
    var pinsDown1 = [1, 2, 3];
    var pinsDown2 = [4, 5, 6];
    var pinsDown3 = [1, 2, 3, 4, 5];
    var pinsDown4 = [6, 7, 8, 9, 10];
    bowlingScore(pinsDown1, pinsDown2);
    bowlingScore(pinsDown3, pinsDown4);
    expect(frame).to.equal(3);
  });

  it('should keep track of frame status with strike', function () {
    var pinsDown1 = [1, 2, 3];
    var pinsDown2 = [4, 5, 6];
    var pinsDown3 = [1, 2, 3, 4, 5];
    var pinsDown4 = [6, 7, 8, 9, 10];
    var pinsDown5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    bowlingScore(pinsDown1, pinsDown2);
    bowlingScore(pinsDown3, pinsDown4);
    bowlingScore(pinsDown5);
    expect(frame).to.equal(4);
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
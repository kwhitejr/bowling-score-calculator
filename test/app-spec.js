var chai = require('chai');
var expect = chai.expect;
var calculator = require('../app');

describe('getFrames', function () {
  it('should be a function', function () {

  });

  it('should group together rolls by frame', function () {
    var worstGame = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // score 0
    expect(calculator.getFrames(worstGame)).to.have.length(10);

    var oneGame = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // score 20
    expect(calculator.getFrames(oneGame)).to.have.length(10);

  });

  it('should permit one extra roll on final spare', function () {
    var fiveGame = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5, 5]; // score 150
    expect(calculator.getFrames(fiveGame)).to.have.length(10);
  });

  it('should permit two extra rolls on final strike', function () {
    var perfectGame = [10,10,10,10,10,10,10,10,10,10,10,10]; // score 300
    expect(calculator.getFrames(perfectGame)).to.have.length(10);
  });

});

describe('getScore', function () {
  it('should be a function', function () {

  });

  it('should add up all the frames', function () {
    var worstGame = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // score 0
    expect(calculator.getScore(worstGame)).to.equal(0);

    var oneGame = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // score 20
    expect(calculator.getScore(oneGame)).to.equal(20);

  });

  it('should give a bonus for spare', function () {
    var fiveGame = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]; // score ?
    expect(calculator.getScore(fiveGame)).to.equal(150);
  });

  it('should give a bonus for strike', function () {
    var perfectGame = [10,10,10,10,10,10,10,10,10,10]; // score 300
    expect(calculator.getScore(perfectGame)).to.equal(300);
  });

});
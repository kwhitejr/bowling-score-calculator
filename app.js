module.exports = function bowlingScoreCalc() {

  this.currentScore = 0;

  this.frame = this.frameTracker.length;

  this.frameTracker = [];

  this.bowlingScore = function(pinList) {

    frameTracker.reduce(function(firstFrame, nextFrame) {
      if (firstFrame[0].length === 10) {
        // strike
      } else if (firstFrame[0].length + firstFrame[1].length === 10) {
        // spare
      } else {
        return (firstFrame[0].length + firstFrame[1].length) + (nextFrame[0].length + nextFrame[1].length);
      }
    });

  };

  this.spare = function(currentScore, nextBowl) {

  };

  this.strike = function(currentScore, nextTwoBowls) {

  };
};
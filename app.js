module.exports = {

  currentScore: 0,

  frame: frameTracker.length,

  frameTracker: [],

  bowlingScore: function(firstDownPins, secondDownPins) {
    this.frameTracker.push([firstDownPins, secondDownPins]);

    frameTracker.reduce(function(firstFrame, nextFrame) {
      if (firstFrame[0].length === 10) {
        // strike
      } else if (firstFrame[0].length + firstFrame[1].length === 10) {
        // spare
      } else {
        return (firstFrame[0].length + firstFrame[1].length) + (nextFrame[0].length + nextFrame[1].length);
      }
    });


    console.log('current score: ' + this.currentScore);
    console.log('current frame: ' + this.frame);
    console.log('frameTracker: ' + this.frameTracker);
  },

  spare: function(currentScore, nextBowl) {


    nextBowl = this.bowlingScore;
    var previousFrameScore = currentScore + nextBowl.length + 10;
  },

  strike: function(currentScore, nextTwoBowls) {
    var previousFrameScore = currentScore + this.bowlingScore();
  }
};
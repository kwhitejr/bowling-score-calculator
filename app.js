module.exports = {
  getFrames: getFrames,
  getScore: getScore
};

function getFrames (rolls) {
  var allFrames = [];
  for (var i=0; i < rolls.length; i++) {
    var newFrame =[];
    newFrame.push(rolls[i]);
    if (rolls[i] < 10) {
      newFrame.push(rolls[i+1]);
      if (allFrames.length === 9) {
        newFrame.push(rolls[i+2]);
        i++;
      }
      i++;
    }
    if (i === 9 && rolls[i] === 10) {
      newFrame.push(rolls[i+1], rolls[i+2]);
      i+=2;
    }
    allFrames.push(newFrame);
  }
  return allFrames;
}

function getScore (frames) {
  var score = 0;
  for (var i=0; i<frames.length; i++) {
    if (frames[i] === 10) {
      // strike
    } else if (frames[i] + frames[i+1] === 10) {
      // spare
      score += (10 + frames[i+2]);
      i++;
      console.log(score);
    } else {
      score += frames[i] + frames[i+1];
      i++;
    }
  }
  return score;
}

function lastFrameHandler (rolls) {
  var frames = getFrames(rolls);
  var lastFrame = frames[9];
  return lastFrame;
}

var worstGame = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // score 0
var oneGame = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // score 20
var fiveGame = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]; // score 150
var perfectGame = [10,10,10,10,10,10,10,10,10,10,10,10]; // score 300


// console.log(getScore(worstGame));
// console.log(getScore(oneGame));
console.log(getScore(fiveGame));
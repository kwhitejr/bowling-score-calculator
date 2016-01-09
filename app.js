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
      i++;
    }
    allFrames.push(newFrame);
  }
  return allFrames;
}

function getScore (frames) {
  var score = 0;
  for (var i = 0; i < frames.length; i++) {
    if (i[0] === 10) {
      //strike
    } else if (i[0] + i[1] === 10) {
      //spare
    } else {
      //reg
    }
  }
}

var worstGame = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // score 0
var oneGame = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // score 20
var fiveGame = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]; // score ?
var perfectGame = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]; // score 300


console.log(getFrames(worstGame));
console.log(getFrames(oneGame));
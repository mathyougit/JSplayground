let numOfPlayers = 2;
let numOfPlayersFinished = 0;

const playerGen = (draftOrder, finished, yardLine, playerNumber) => {
  return {
    draftOrder,
    finished,
    yardLine,
    playerNumber,
  };
}

const playerOne = playerGen(0, false, 0, 'One');
const playerTwo = playerGen(0, false, 0, 'Two');

const randomRun = () => { 
  return Math.floor(Math.random() * 10) + 1;
};

const timeDelay = () => {
  return Math.floor(Math.random() * 6000) + 1000;
};

let playerRun = (player) => {
  if (player.yardLine < 100) {
    player.yardLine = player.yardLine + randomRun();
    if (player.yardLine >= 100) {
      numOfPlayersFinished++;
      player.finished = true;
    }
  }
}

class playerPosition {
  constructor(yard, time, timeStamp, player) {
    this.yard = yard;
    this.time = time;
    this.timeStamp = timeStamp;
    this.player = player;
  } 
}

var playerOnePosition = new playerPosition(0, 0, 0, 'One')
var playerTwoPosition = new playerPosition(0, 0, 0, 'Two')

var playerOneArray = [playerOnePosition]
var playerTwoArray = [playerTwoPosition]

const addPosition = (arr, pos) => {
  lastTime = arr[arr.length -1].timeStamp
  pos.timeStamp = pos.time + lastTime
  arr.push(pos)
}


const startRace = () => {
  do {
    if (playerOne.finished !== true) {
      playerRun(playerOne)
      playerOnePosition = {'yard': playerOne.yardLine, 'time': timeDelay(), 'timeStamp': 0,'player': 'One'}            
      addPosition(playerOneArray, playerOnePosition)
      //     await sleep(playerRun, playerOne);
    }
    if (playerTwo.finished !== true) {
      playerRun(playerTwo)
      playerTwoPosition = {'yard': playerTwo.yardLine, 'time': timeDelay(), 'timeStamp': 0,'player': 'Two'}            
      addPosition(playerTwoArray, playerTwoPosition)      
      //     await sleep(playerRun, playerTwo);
    }
  } while (numOfPlayersFinished < numOfPlayers);
};

startRace();

playerOneFinishTime = Math.max.apply(Math, playerOneArray.map(function(o) { return o.timeStamp; }))
playerTwoFinishTime = Math.max.apply(Math, playerTwoArray.map(function(o) { return o.timeStamp; }))

finishTime = Math.max(playerOneFinishTime, playerTwoFinishTime)

const playersArray = playerOneArray.concat(playerTwoArray)

playersArray.sort((a,b) => (a.timeStamp > b.timeStamp) ? 1:-1)

        // function timeout(ms) {
        //   return new Promise(resolve => setTimeout(resolve, ms));
        // }
        
        // // deconstructing
        // async function sleep(fn, ...args) {
        //   await timeout(timeDelay());
        //   return fn(...args);
        // }

const printRace = () => {
  console.log('Race begins!')
  console.log('Both Players at the 0 yard line.')
  playersArray.forEach((record) => {
      setTimeout(() =>  { if (record.time !== 0) {console.log(`Player ${record.player} is at the ${record.yard} yard line at ${record.timeStamp} ms`)}
                          if (record.yard >= 100) {console.log(`Player ${record.player} has passed the finish line!`)}
                        }, record.timeStamp);
  })
}

printRace()
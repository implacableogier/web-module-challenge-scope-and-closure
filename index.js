// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 2 references a variable with global scope to execute it's function, while counterMaker is self-referential 
 * in the sense that it refers to a variable (count) which is defined within the scope of its own function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses a closure. This is evident from the fact that it's variables are not globally defined. That is, the variable
 * that it references is defined within the confines of its own code and is not accessible anywhere outside of this code block.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter 1 would be preferable if you did not need to reference the variable(s) defines within in any other context. counter2
 * would be preferable if you needed to reference the counter variable in some other function, or if for any other reason you
 * needed to reference count outside of that particular function.
*/

// counter1 code
function counterMaker(repeat) {
  let count = 0;

  return function (parameter) {

    for (let i = parameter; i < repeat; i++) {
    ++count;
  }
  return count;
}

}

const counter1 = counterMaker(10);

//trying to invoke above function

console.log(counter1())





// counter2 code
let count = 0;

function counter2() {
  return count++;
}

console.log(counter2())
console.log(counter2())




/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. 
This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){

  let points = Math.floor(Math.random()*3)
  return points;

}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of 
innings and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
// create variables to keep track of separate scores for HOME and AWAY teams
// 

function finalScore(numOfInnings, inning){
  let homeScore =  0;
  let awayScore = 0;
  
  for (let i = 0; i < numOfInnings; i++) {
    homeScore = homeScore + inning();
    awayScore += inning();
  }

  
  return {
    Home: homeScore,
    Away: awayScore
  }
  

}
console.log(finalScore(9,inning))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


//create variables to store the value representing each team's score for each inning
//create an array to push the results of each inning to and store.

//create an array to store the results of each teams score, each inning/


function scoreboard(getInningScore, inning, numOfInnings) {
  
  const scores = [];
  const homePerInning = 
  for (let i = 0; i < numOfInnings; i++) {
    
    const currentInning = getInningScore(inning)
    scores.push(`The ${i+1}st inning: Hometeam score: ${currentInning.Home} - Awayteam score: ${currentInning.Away}`)
  
  }
   return scores;
  
}
console.log(scoreboard(getInningScore, inning, 9))




//                      THIS is the callback
function getInningScore(inning) {
  

  // could consolidate the following 2 lines into the return statement below
  let homeTeam = inning();
  let awayTeam = inning();

  return {
    Home: homeTeam,
    Away: awayTeam
  }
}
//                         This is the original

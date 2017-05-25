(function(){

let result = "" //initializing to empty for use in if statement
//audio files for shots made and missed
let cheer = new Audio("assets/images/cheer.wav");
let miss = new Audio("assets/images/miss.wav");

//grab a random number and retun odd or even as the results of the shot
function shoot(){
  let randomNumber = Math.floor(Math.random() * 10) + 1 ;
    if (randomNumber % 2){
      // console.log("this is an odd number");
      result="odd";
    } else {
      // console.log("this is an even number");
      result="even";
    }
}
// console.log("result = " + result)
//team one shot counter
let teamOne = document.querySelector("#teamone-shoot");
let teamOneCounter = document.querySelector("#teamone-numshots");
let teamOneGoalCounter = document.querySelector("#teamone-numhits");


teamOne.addEventListener("click", function(){
      teamOneCounter.innerHTML = parseInt(teamOneCounter.innerHTML) + 1;
    shoot(); //take a shot
    // console.log("teamOneShoots");
      if (result == "even") {
        // console.log(result)
        teamOneGoalCounter.innerHTML = parseInt(teamOneGoalCounter.innerHTML) + 1;
        cheer.play();
      }else{
        miss.play();
      }
    });

//team two shot counter
let teamTwo = document.querySelector("#teamtwo-shoot");
let teamTwoCounter = document.querySelector("#teamtwo-numshots");
let teamTwoGoalCounter = document.querySelector("#teamtwo-numhits");

teamTwo.addEventListener("click", function(){
    teamTwoCounter.innerHTML = parseInt(teamTwoCounter.innerHTML) + 1;
    shoot(); //take a shot
    // console.log("teamTwoShoots");
      if (result == "even") {
        // console.log(result)
        teamTwoGoalCounter.innerHTML = parseInt(teamTwoGoalCounter.innerHTML) + 1;
        cheer.play();
      }else{
        miss.play();
      }
    });
//reset button counter and shot counter reset to zero
let resetButton = document.querySelector("#reset");
let numResets = document.querySelector("#num-resets");


resetButton.addEventListener("click", function(){
  numResets.innerHTML = parseInt(numResets.innerHTML) + 1;
  document.querySelector("#teamtwo-numshots").innerHTML = 0;
  document.querySelector("#teamone-numshots").innerHTML = 0;
  document.querySelector("#teamone-numhits").innerHTML = 0;
  document.querySelector("#teamtwo-numhits").innerHTML = 0;
})
})();

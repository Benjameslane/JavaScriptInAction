"use strict";

//task one
let dayOfWeek = "Monday";
console.log(dayOfWeek);
dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}!`);

//task two
let animalInput = (prompt("What is your favorite animal?"));
let colorInput = (prompt("What is your favorite color?"));
let bothInputs = `${colorInput} ${animalInput}`;
console.log(`I've never seen a ${bothInputs}!`);

//CONDITIONALS = task one - may need help on this one -------------------------------------------------
let timeOfDay = 1300;
let meal;

if(timeOfDay < 1200){
    meal = Burrito;
}
else if(1700 >= timeOfDay >= 1200){
    meal = Taco;
}
else if(timeOfDay > 1700){
    meal = Bowl;
}
console.log(meal);

//CONDITIONALS = task two 
let randomNumber = Math.floor(Math.random() * 11);
if (randomNumber >= 0 && randomNumber <= 2) {
    console.log("Beatles");
  } else if (randomNumber >= 3 && randomNumber <= 5) {
    console.log("Stones");
  } else if (randomNumber >= 6 && randomNumber <= 8) {
    console.log("Floyd");
  } else if (randomNumber === 9 || randomNumber === 10) {
    console.log("Hendrix");
  }

  //FOR LOOPS - task one
  for (let i = 0; i < 7; i++) {
    console.log("JavaScript is cool!");
  }

  //FOR LOOPS - task two 
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

  //FOR LOOPS - task three
  for (let i = 0; i < 5; i++) {
    console.log("hello");
    console.log("goodbye");
  }

  //FUNCTIONS SECTIONS - task one
  function printMovieName(userInput){
  let favoriteMovie = userInput;
  console.log(favoriteMovie);}
  
  let myInput = printMovieName("tarzan");
  
  //FUNCTIONS SECTIONS - task two
  function printFavoriteBand(){
    let band = (prompt("What is your favorite band?"));
    return band;
  }
  let bandInput = printFavoriteBand();
  console.log(bandInput);

  //FUNCTIONS SECTIONS - task three
  function concertDisplay(musicalAct) {
    let myStreet = prompt("Enter the street you live on");
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`);
  }
  concertDisplay("Hamilton");
  




  
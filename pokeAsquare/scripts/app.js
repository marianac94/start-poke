let score = 0;
const checkValidPoke = (color) => {
  if (color === 'rgb(0, 0, 255)') {
    // updating the code
    score++;
      $('h1').text('scoreboard: ' + score)
  } else {
    score--;
    // actually updating the DOM
    $('h1').text('scoreboard: ' + score)
  }
};

$('button').on('click', () => {
  console.log('click works');
  // When the user clicks the button we populate the square
  createSquares(30);
});

// Now we need to write a function named (createSquares) that sets up our squares, Try to write a function that takes a parameter numberOfSquares that will create an arbitary number of divs depending on the parameter and attach them to the squares class from the html

const createSquares = (numberOfSquares) => {

  for(let i = 0; i <= numberOfSquares; i++) {
    // creating squares
    const $div = $('<div/>').on('click', disappearSquares);
      // const $div = $('<div/>').on('click', (e));
      // $(e.currentTarget);
      // $(e.currentTarget).fadeTo("slow", 0);
      // $(e.currentTarget).css('opacity', 0);
    // });
    // e is short for event
    // e.currentTarget gives you the div you are clicking on
    // this is where the color is applied
    applyRandomColor($div);
    // actually attach it to the square class
    $('.squares').append($div);

  }
};

const disappearSquares = (e) => {

  // to retrive a property
  const color = $(e.currentTarget).css('background-color');

  // setting a property
  $(e.currentTarget).css('opacity', 0);
  checkValidPoke(color);
}

// Now we have a bunch of blue squares, but we want our squares to have a random, red, blue, or green color try to write a function to make that happen.

const applyRandomColor = (square) => {

  const randNum = Math.floor(Math.random() * 3) + 1;
// im assuming square is a jquery objects
  if(randNum === 1){
    square.css('background-color', 'red');
  } else if (randNum === 2){
    square.css('background-color', 'blue');
  } else {
    square.css('background-color', 'green');
  }

}

// Now that we have colored squares, lets make them clickable, and hidden when we click on them. Give it a try! (I recommend just changing the opacity)

// lets write a function called (checkValidPoke) that takes that color string and if it is blue lets update a global score variable.

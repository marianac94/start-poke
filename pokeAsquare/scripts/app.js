console.log('hi');


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
  $(e.currentTarget).css('opacity', 0);
}

// Now we have a bunch of blue squares, but we want our squares to have a random, red, blue, or green color try to write a function to make that happen.

// var random_color = colors[Math.floor(Math.random() * colors.length)]
// $('#squares').css('color', random_color

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

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

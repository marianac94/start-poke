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
    const $div = $('<div/>');
    // actually attach it to the square class
    $('.squares').append($div);

  }

}

$(init);

let randomImages  = [];
const imagesArray   =  ['image_1.png','image_2.png','image_3.png','image_4.png','image_5.png','image_6.png','image_7.png','image_8.png','image_9.png','image_10.png','image_1.png','image_12.png'];
let counter         = 0;
let $score          = 0;
let $attempts       = 0;
let $startGame      = null;
let $buttonYes      = null;
let $buttonNo       = null;
let $imageContainer = null;


function init() {
  let gameOver     = false;
  $startGame       = $('#startGame');
  $buttonYes       = $('#yesButton');
  $buttonNo        = $('#noButton');
  $imageContainer  = $('.images');
  addEventListeners();

  function addEventListeners() {
    $startGame.on('click', startGame);
    $buttonYes.on('click', randomImagesComparisonYes);
    $buttonNo.on('click', randomImagesComparisonNo);
  }

  function startGame() {
    $startGame.addClass('hideOptions');
    pickRandomImages();
    startTimer();
  }

  function pickRandomImages() {
    // $startGame.addClass('hideOptions');
    for (let i = 0; i < 2; i++) {
      const randomImage = imagesArray[Math.floor(Math.random()*imagesArray.length)];
      randomImages.push(randomImage);
      console.log(randomImage);
    }
    showImages();
  }

  function showImages() {
    $($imageContainer).removeClass('hidden');
    const imagesInterval = setInterval(function() {
      $($imageContainer).css('background-image', `url(./images/${randomImages[counter]})`);
      setTimeout(function() {
        $($imageContainer).css('background-image', `none`);
      }, 500);
      counter++;

      if (counter === 2) {
        clearInterval(imagesInterval);
        counter = 0;
        showButtons();
        randomImages = [];
        console.log('>>>SCORE<<<');
        console.log($score);
      }
    }, 1000);
    //
  }

  function showButtons() {
    $('.showMe').removeClass('hideOptions');
    $('.instructions').addClass('hideOptions');
    // $buttonYes.css('display', 'block');
    // $buttonNo.css('display', 'block');
  }

  function randomImagesComparisonYes() {
    // if (gameOver === true) {
    //   reset();
    // } else {
    //   // found this as a way of exiting
    //   return;
    // }
    $attempts += 1;
    if(randomImages[0] === randomImages[1]) {
      $score += 1;
    }
    updateDisplay();
    pickRandomImages();
  }

  function randomImagesComparisonNo() {

    $attempts += 1;
    if( randomImages[0] !== randomImages[1]) {
      $score += 1;
    }

    updateDisplay();
    pickRandomImages();
  }

  function updateDisplay() {
    $('.attemptsMade').html($attempts);
    $('.currentScore').html($score);
    // $('.score').text('You got ' + $score + ' right in ' + $attempts +'.');
  }

  function reset() {
    const randomImages  = [];
    let counter         = 0;
    let $score          = 0;
    let $attempts       = 0;
  }

  function startTimer() {
    let timer = 60;
    setInterval(function(){
      timer -= 1;
      $('.timeLeft').html(timer);
      if (timer === 0) {
        // alert('You ran out of time!');
        timer = 60;
        $('.info').text('Would you like to play another game?');
        gameOver = true;
      }
    }, 1000);
  }

}




// this is an example for exiting the function
// var result = prompt("OK?");
// if (result === null) {
//     return;
// }

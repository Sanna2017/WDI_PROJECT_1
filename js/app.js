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

  var audio        = $('#audio');



  addEventListeners();

  function addEventListeners() {
    $startGame.on('click', startGame);
    $buttonNo.on('click', randomImagesComparisonNo);
    $buttonYes.on('click', randomImagesComparisonYes);

  }

  function startGame() {
    $startGame.addClass('hideOptions');
    pickRandomImages();
    startTimer();
    this.audio = new Audio;
    this.audio.src= 'sounds/wave.wav';
    this.audio.play();
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
        // randomImages = [];
        console.log('>>>SCORE<<<');
        console.log($score);
      }
    }, 1000);
    //
  }

  function showButtons() {
    $('.showMe').removeClass('hideOptions');
    $('.instructions').addClass('hideOptions');
  }

  function randomImagesComparisonYes() {
    $attempts += 1;
    if(randomImages[0]  === randomImages[1]) {
      console.log(randomImages[0] + 'INDEX 0');
      $score += 1;
      // audio.play();
    }
    updateDisplay();
    pickRandomImages();
  }

  function randomImagesComparisonNo() {
    $attempts += 1;
    if(randomImages[0] !== randomImages[1]) {
      $score += 1;
      // audio.play();
    }
    updateDisplay();
    pickRandomImages();
  }

  function updateDisplay() {
    $('.attemptsMade').html($attempts);
    $('.currentScore').html($score);
    // $('.score').text('You got ' + $score + ' right in ' + $attempts +'.');
  }

  function startTimer() {
    let timer = 15;
    setInterval(function(){
      timer--;
      $('.timeLeft').html(timer);
      if (timer === 0) {
        alert('You ran out of time!');
        const result = prompt('Play Again? (yes / no)');
        if (result === 'yes') {
          console.log('YES CHOSEN');
          location.reload();
        }else if (result === 'no') {
          console.log('NO CHOSEN');
          location.reload();
        }
      }
    }, 1000);
  }

}




// this is an example for exiting the function
// var result = prompt("OK?");

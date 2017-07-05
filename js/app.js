// $(init);
//
// const imagesArray =['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg','image9.jpg','image10.jpg','image1.jpg','image12.jpg'];
//
// function init() {
//   // all dom elements are loaded inside this funcion only.
//   const buttonStartGame = document.getElementById('startGame');
//   const buttonYes = document.getElementById('yesButton');
//   const buttonNo = document.getElementById('noButton');
//   // taking an element by className means that it is stored in an array so undex needs to be indicated
//   const images = document.getElementsByClassName('images')[0];
//   // all click events should be defined inside this function.
//   buttonStartGame.addEventListener('click', function() {
//     console.log("I've been clicked!");
//   });
//
//   buttonYes.addEventListener('click', function(){
//     if(firstImage === secondImage ) {
//       //// push a count 1 in a match result array and in a attempts array
//       matchResult += 1;
//     } else {
//       //     // push the a count of 1 in a go array
//       attempts += 1;
//     }
//   })
//
//   // hide red div
//   document.getElementsByClassName('images')[0].style.display = 'none';           // Hide
//   // or can I just go for images.style.display = none;
//
//
//   // images.hide(time - how long, function to call after the time has passed)
//   // hide();
//   // show();
//
// }
//
// function startGame() {
//   // show first random image.
//   function firstRandomImage() {
//     var firstImage = Math.floor(Math.random() * (imagesArray.length+1));
//     // firstImage.style.display = 'block';
//   }
//   // show red div element
//   document.getElementsByClassName('.images').style.display = 'block';
//   // pick random item out of array
//   var secondImage = Math.floor(Math.random() * (imagesArray.length+1));
//
//   // select red div from the dom
//
//   // change css of red div to have a background image of the random item out of the array
//   document.getElementsByClassName('.images').style.backgroundImage = secondImage;
//   // after time, remove image from div
//   // do I need to use jQuery all the way through so I can use
//   // $('.images').append('secondImage') and $('.images').remove(secondImage)
//
// }

// $(init);

// const firstImage  = null;
// const secondImage = null;
// const imagesArray    = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg','image9.jpg','image10.jpg','image1.jpg','image12.jpg'];
//
// function init() {
//   const startGame       = document.getElementById('startGame');
//   const buttonYes       = document.getElementById('yesButton');
//   const buttonNo        = document.getElementById('noButton');
//   const imageContainer  = document.getElementsByClassName('images')[0];
//
//   startGame.addEventListener('click', start);
//
//   function start() {
//     imageContainer.classList.remove('hidden');
//
//     const firstImage = imagesArray[Math.floor(Math.random()*imagesArray.length)];
//
//     // get second image
//     const secondImage = imagesArray[Math.floor(Math.random() * imagesArray.length+1)];
//
//     showImages(firstImage, secondImage);
//   }
//
//   function showImages(cat, dog) {
//     // show the first image
//     $(imageContainer).css('background-image', `url(./images/${cat})`);
//
//     //make the first image dissapear after a period of time
//     setTimeout(function() {
//       $(imageContainer).css('background-image', `none`);
//     }, 3000);
//     // show second image
//     $(imageContainer).css('background-image', `url(./images/${dog})`);
//     // make it dissapear after a period of time
//     setTimeout(function() {
//       $(imageContainer).css('background-image', `none`);
//     }, 3000);
//   }
//
// }

// document.element('div')
// $('div').

// var randomImages = ['image1.jpg', 'image4.jpg'];
// var counter = 0;
//
//
// setInterval(function() {
//   // randomImages[counter] <--- randomImages[0] <--- 'image1.jpg'
//   $(imageContainer).css('background-image', `url(./images/${randomImages[counter]})`);
//
//   setTimeout(function() {
//     $(imageContainer).css('background-image', `none`);
//   }, 2000);
//
//   counter++;
//
//   if (counter === 2) {
//     clearInterval();
//   }
// }, 3000);

// always run function(init) at the begginging of your code in order for the dom to be run
$(init);

// all vars stated in global scope

// a var with all the images stored in there
const imagesArray   = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg','image9.jpg','image10.jpg','image1.jpg','image12.jpg'];
// counter var declared in global scope set to 0 only to be increased when running showImages()
let counter         = 0;
// an empty var to store the randomImages selected in pickRandomImages()
const randomImages  = [];
// ???????????????? check this let score!!!!! created to store scores as the game is played
let score = null;
// ??????????? check this let!!!!!!!!!!!! created to store number of attempts as the game is played
let attempts = null;
// vars for each dom element declared in global scope with a value of null in order to be accessed outside the init()
let $startGame      = null;
let $buttonYes      = null;
let $buttonNo       = null;
let $imageContainer = null;
// function to load all the dom elements and they are all converted to jQuery objects
function init() {
  $startGame       = $('#startGame');
  $buttonYes       = $('#yesButton');
  $buttonNo        = $('#noButton');
  $imageContainer  = $('.images');
  // load attempts and score elements, maybe instructions??????
  const $score           = $('.score');
  const $attempts        = $('.attempts');
  const $instructions    = $('.instructions');
// inside init() call pickRandomImages()
  pickRandomImages();
}
// pickRandomImages() declared
function pickRandomImages() {
  // making sure that pickRandomImages() loops through imagesArray only twice to pick only 2 images at the time
  for (let i = 0; i < 2; i++) {
    // pick a random image
    const randomImage = imagesArray[Math.floor(Math.random()*imagesArray.length)];
    // push a randomImage selected to a randomImage array in global scope
    randomImages.push(randomImage);
  }


// after both images are selected call showImages() to display them
  showImages();

}
// showImages() declared
function showImages() {
  // the div where the images will be shown changes removes the class .hidden beceause it needs to be shown
  $($imageContainer).removeClass('hidden');
// store the setInterval() because it has to be called to clear the end of showImages()
  const imagesInterval = setInterval(function() {
    // change the background image to the image that was selected and stored in randomImages array with an index value of counter value
    $($imageContainer).css('background-image', `url(./images/${randomImages[counter]})`);
// timeout() is a part of showImages() to be able to take away the shown image
    setTimeout(function() {
      // change the background-image of imageContainer to none to make the image dissapear
      $($imageContainer).css('background-image', `none`);
      // set the time for the change of the background to none to 2 sec which will make the image stay in the div for 2 sec
    }, 2000);
    // increase the counter by 1 to move onto the second image or clear interval if the counter is 2
    counter++;

    if (counter === 2) {
      clearInterval(imagesInterval);
      // set the counter to 0 after clearing interval in order to start again
      counter = 0;
      // call showButtons() after the second image has been displayed
      showButtons();
    }
    // display the second image for 3 sec
  }, 3000);
}

function showButtons() {
  console.log('show buttons');

  // show buttons
  $($buttonYes).css('display', `block`);
  $($buttonNo).css('display', `block`);




  // add event listeners on buttons
  $buttonYes.addEventListener('click', randomImagesComparisonYes());
  $buttonNo.addEventListener('click', randomImagesComparisonNo());


  // dependng on choice 'yes' or 'no'



  // compare the two elements in the array

  function randomImagesComparisonYes() {
    if(randomImages[0] === randomImages[1]) {
  // increase the score value by 1
      score += 1;
    } else {
  //    increase the attempts value by 1
      attempts += 1;
    }
  }

  function randomImagesComparisonNo() {
    if( randomImages[0] !== randomImages[1]) {
      score += 1;
      console.log('it works');
    } else {
      attempts += 1;
    }
  }

}



// to add text to the div use
// $('selected element').text("Welcome");

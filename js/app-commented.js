console.log('loaded');


// shape matching game

// LAYOUT OF THE GAME

 // DO NOT display all the shapes at the beggining (8 shapes?) and describe the game in a paragraph
  // start the game button
//
// global scope
  // have all images in an array
  //  timer to time the first image show and then hide
  // timer for second image
  // timer for the whole game gameSetTimer()
  // array for result const result =[];

//



// PLAY GAME playGame();


// START GAME
// click the button start game
// paragraph dissapears through the setting of the class in CSS and by triggering it in a function startGame()
// add a click event listerner and
// to make all the images dissapear I can change visability of the them in javascrit by using i.e.
//
		// document.getElementById('logoButton').onClick = function(event){
		// 	document.getElementById('logo').className = "show";
    // display: none
		// }
    //
		// document.getElementById('logo').onClick = function(event){
		//   	document.getElementById('logo').className = "hidden";
		// }

// all the shapes/images dissapear


// playGame();

// FIRST IMAGE
// show first image ()
// and only one image appears random image
// <script type="text/javascript">
    // function getRandomImage() {
    // var num = Math.floor( Math.random(images) * 11);
    // var img = ImageArray[num];
    // document.getElementById("randImage").innerHTML = ('<img src="' + 'images/random/' + img + '" width="250px">')
// to make it visible change only a class on that random element
// it stays for a cetrain time, 2-3 seconds and then dissapears
// settimer function goes first;





// SECOND IMAGE
// another image appears and you have 10 seconds to decide if that is the same image as the previous image
// second randomImage function fires

// click 'yes' or 'no'
// if 'yes' and 'no' is clicked, the answer has to be checked against if statement
// and the result is stored in an result array and added to be accessed later
// if nothing is clicked after time passed, it is the end of the game and reset button has to be clicked for the game to start again
// set the timer for finding a match and to click 'yes' or 'no'
// sound connected to the timer
//
//



//END OF THE GAME

// gameSetTimer()finishes with a sound
// const result =[].length is in the massage displayed at the score message

//
//
//
// RESET THE GAME
//
// click on play again button (reset button) or exit

// reset button calls playGame()

// empty function to ensure that the dom is loaded
// $(() => {
//
// });
//
//
//
// // array for result const result =[];
//
// // images in an array
// const imagesArray =[
//   imagesArray[0] = new Image(),
//   imagesArray[0].src = 'image1.jpg',
//   imagesArray[1] = new Image(),
//   imagesArray[1].src = 'image2.jpg',
//   imagesArray[2] = new Image(),
//   imagesArray[2].src = 'image3.jpg',
//   imagesArray[3] = new Image(),
//   imagesArray[3].src = 'image4.jpg',
//   imagesArray[4] = new Image(),
//   imagesArray[4].src = 'image5.jpg',
//   imagesArray[5] = new Image(),
//   imagesArray[5].src = 'image6.jpg',
//   imagesArray[6] = new Image(),
//   imagesArray[6].src = 'image7.jpg',
//   imagesArray[7] = new Image(),
//   imagesArray[7].src = 'image8.jpg',
//   imagesArray[8] = new Image(),
//   imagesArray[8].src = 'image9.jpg',
//   imagesArray[9] = new Image(),
//   imagesArray[9].src = 'image10.jpg',
//   imagesArray[10] = new Image(),
//   imagesArray[10].src = 'image11.jpg',
//   imagesArray[11] = new Image(),
//   imagesArray[11].src = 'image12.jpg'
//
// ];
//     // imagesArray[0] = new Image();
//     // imagesArray[0].src = new "dog.jpg";
//
//
//
//
//
// // timer for the whole game
// setTimeoutGame(playGame(),300000);
//
// // button var for startGame
// // const buttonStartGame = document.querySelector('#startGame');
// const buttonStartGame = $('#startGame');
//
//
// // button for yes answer
// const buttonYes = document.querySelector('#yesButton');
//
// // button for no answer
// const buttonNo = document.querySelector('#noButton');
//
//
// // const array for matchhing result
// let matchResult = 0;
//
// // var that stores and diplays number of attempts made
// let attempts= 0;
//
//
//  //
//
//
//
//
//
//
//
// // / timer for second image
//     // setTimeoutSecondImage(secondRandomImage, 10000);
//
//
// // create a click event for a button to start the game
// buttonStartGame.addEventListener('click', function() {
//   // function that makes buttonStartGame dissapear using
//   // ocument.getElementById('logo').onClick = function(event){
//   //   	document.getElementById('logo').className = "hidden";
//     // }
//     console.log("I've been clicked!");
// });
//
// playGame(){
//   firstRandomImage;
//
// }
//
//
//
// // use this to start click the button and start the game define a function startGame
//
//
//
//
// // function to display the first image and for the set time
// function firstRandomImage() {
//   var firstImage = Math.floor(Math.random() * (imagesArray.length+1));
//   // to display the image
//   document.getElementsByClassName('.images').appendChild(firstImage);
//   //  timer to time the first image show and then hide
//   setTimeout(firstRandomImage,3000);
//
// }
//
//
//
//
// var timeFirstImage = setInterval(firstRandomImage(), 5000);
//
// // function to display the second random image and for the set time
// function secondRandomImage() {
//   var secondImage = Math.floor(Math.random() * (imagesArray.length+1));
// }
//
// var timeSecondImage = setInterval(secondRandomImage(), 3000);
//
//
// // create a click event for a yes button to submit the choice
// buttonYes.addEventListener('click', function() {
//   if(firstImage === secondImage ) {
//     // push a count 1 in a match result array and in a attempts array
//     matchResult += 1;
//   } else {
//     // push the a count of 1 in a go array
//     attempts += 1;
//   }
// });
//
// // create a click event for a no button to submit the choice
// buttonNo.addEventListener('click', function() {
//   if(firstImage !== secondImage){
//     matchResult += 1;
//     console.log(matchResult);
//     // push a count 1 in a match result array and in a attempts array
//   } else {
//     // push the a count of 1 in a go array
//     attempts += 1;
//   }
// });
//
//
//
// // create a function playGame() that will have all other functions firstRandomImage() and secondRandomImage() and the yes and no button matching functions
//
// // create a message on result including matchResult as a numberof answers the player got right
//  // out of  number of attempt
//
//
//
//
//
//
//
//
// // using setinterval to keep the image for a certain period of time
// // var myVar = setInterval(function(){ setColor() }, 300);
// //
// // function setColor() {
// //     var x = document.body;
// //     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// // }
// //
// // function stopColor() {
// //     clearInterval(myVar);
// // }
//

//




//reset the game
// function initNewGame(){
//     // setup game vars and cards
// }
//
// function endGame(){
//     // clean game vars and remove cards
// }
//

// my possible solution to reset the game
// function newOrReset(){
//     endGame();
//     initNewGame();
//    clearInterval(timeFirstImage);
//    clearInterval(timeSecondImage);
// }

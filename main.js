// VARIABLES //

// RADIO BUTTONS
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var dessertRadio = document.querySelector('#dessert');
var entireMealRadio = document.querySelector('#entire-meal');

// CALLOUT BUTTONS & MODIFIERS
// var mealContainer = document.querySelector('.meal-container'),
//     letsCookBtn = document.getElementbyID('cook');
var letsCookBtn = document.querySelector('#cook');
var clearBtn = document.querySelector('#clear');
var cookpotImg = document.querySelector('#cookpot');
// var shouldMake = document.querySelector('.meal-only');
var shouldMake = document.querySelector('#make-title');
var mealText = document.querySelector('#meal-text');
var entireMealText = document.querySelector('#entire-meal-text');


// EVENT LISTENERS
// letsCookBtn.addEventListener("click", displayMeal();
letsCookBtn.addEventListener("click", displayMeal);
clearBtn.addEventListener("click", potView);

// EVENT HANDLERS

function displayMeal() {
  if (sideRadio.checked) {
    getRandomSide();
  } else if (mainRadio.checked) {
    getRandomMain();
  } else if (dessertRadio.checked) {
    getRandomDessert();
  } else if (entireMealRadio.checked) {
    getRandomMeal();
  } else {
    alert("Oops! You forgot to make a selection!")
  }
}

// FUNCTIONS //
function preventDefault() {
  event.preventDefault();
}

// function modifyMealContainer() {
//   var button = this;
//   meal.style.display = inlineBlock;
// }

// MEAL CONTAINER VIEW FUNCTIONS //
function mealView() {
  shouldMake.innerText = 'You should make:';
  cookpotImg.classList.add("hidden");
  shouldMake.classList.remove("hidden");
  entireMealText.classList.add("hidden");
  mealText.classList.remove("hidden");
  clearBtn.classList.remove("hidden");
}

function entireMealView() {
  shouldMake.innerText = 'You should make:';
  cookpotImg.classList.add("hidden");
  shouldMake.classList.remove("hidden");
  mealText.classList.add("hidden");
  entireMealText.classList.remove("hidden");
  clearBtn.classList.remove("hidden");
}

function potView() {
  cookpotImg.classList.remove("hidden");
  shouldMake.classList.add("hidden");
  mealText.classList.add("hidden");
  entireMealText.classList.add("hidden");
  clearBtn.classList.add("hidden");
  clearRadioButtons()
}

// RANDOMIZER FUNCTIONS  //

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
}

function getRandomSide() {
  preventDefault();
  if(sideRadio.value) {
    mealView();
    mealText.innerText = `${sides[getRandomIndex(sides)]}!`;
  }
}

function getRandomMain() {
  preventDefault();
  if(mainRadio.value) {
    mealView();
    mealText.innerText = `${mains[getRandomIndex(mains)]}!`;
  }
}

function getRandomDessert() {
  preventDefault();
  if(dessertRadio.value) {
    mealView();
    mealText.innerText = `${desserts[getRandomIndex(desserts)]}!`;
  }
}

function getRandomMeal() {
  preventDefault();
  if(entireMealRadio.value) {
    entireMealView();
    entireMealText.innerText = `${mains[getRandomIndex(mains)]}, with a side of ${sides[getRandomIndex(sides)]}, and ${desserts[getRandomIndex(desserts)]} for dessert!`;
  }
}

function clearRadioButtons() {
  sideRadio.checked = false;
  mainRadio.checked = false;
  dessertRadio.checked = false;
  entireMealRadio.checked = false;
}

/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
// Global variables

const form = document.getElementById('dino-compare');

const button = document.getElementById('btn');

const getButton = () => '<div id=\'newBtn\' onclick="refreshBoard()">Compare Me Again!</div>';

// Create Animal Class with Dino subclass
function Animal(species, weight, height, diet, image) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.image = image;
}

// eslint-disable-next-line prefer-const
let human = null;

function Dino(species, weight, height, diet, where, when, fact, image) {
  Animal.call(this, species, weight, height, diet, image);
  this.where = where;
  this.when = when;
  this.fact = fact;
}
// all the methods of the Animal prototype (if there is any) will be inherited for by Dino class
Dino.prototype = Object.create(Animal.prototype);

/* Get dinos fetching the json
async function getDinoObjectsFromJSON() {
  const dinoArray = [];
  const jsonResponse = await fetch('./dino.json');
  const dinoDataFromJson = await jsonResponse.json();
  dinoDataFromJson.Dinos.forEach((dino) => {
    dinoArray.push(new Dino(
      dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact,
    ));
  });
  return dinoArray;
}

const dinos = getDinoObjectsFromJSON();
*/

// Create Dino Objects
const dino1 = new Dino(
  'Triceratops',
  5895,
  3474,
  'Herbivore',
  'North America',
  'Late Cretaceous',
  'First discovered in 1889 by Othniel Charles Marsh',
);
const dino2 = new Dino(
  'Tyrannosaurus Rex',
  5400,
  4390,
  'Carnivore',
  'North America',
  'Late Cretaceous',
  'The largest known skull measures in at 5 feet long.',
);
const dino3 = new Dino(
  'Anklyosaurus',
  4760,
  1676,
  'Herbivore',
  'North America',
  'Late Cretaceous',
  'Anklyosaurus survived for approximately 135 million years.',
);
const dino4 = new Dino(
  'Brachiosaurus',
  31700,
  11338,
  'Herbivore',
  'North America',
  'Late Jurasic',
  'An asteroid was named 9954 Brachiosaurus in 1991.',
);
const dino5 = new Dino(
  'Stegosaurus',
  5260,
  2408,
  'Herbivore',
  'North America, Europe, Asia',
  'Late Jurasic to Early Cretaceous',
  'The Stegosaurus had between 17 and 22 seperate places and flat spines.',
);
const dino6 = new Dino(
  'Elasmosaurus',
  7260,
  1799,
  'Carnivore',
  'North America',
  'Late Cretaceous',
  'Elasmosaurus was a marine reptile first discovered in Kansas.',
);
const dino7 = new Dino(
  'Pteranodon',
  60,
  610,
  'Carnivore',
  'North America',
  'Late Cretaceous',
  'Actually a flying reptile, the Pteranodon is not a dinosaur.',
);
const dino8 = new Dino(
  'Pigeon',
  0.2,
  27,
  'Herbivore',
  'World Wide',
  'Holocene',
  'All birds are living dinosaurs.',
);

// Dinosaurs are group in an array
const myArray = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8];

// Generate dino array and shuffle function. Stackoverflow shuffle method (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
function createCustomArray() {
  if (myArray.includes(human)) {
    myArray.splice(4, 1);
  }
  for (let i = myArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [myArray[i], myArray[j]] = [myArray[j], myArray[i]];
  }
  myArray.splice(4, 0, human);// Put value human in the middle of the array
  return myArray;
}

// Dino method 1 (weight)
// eslint-disable-next-line no-shadow
Dino.prototype.methodWeight = function (human) {
  if (this.weight > human.weight) {
    return `${this.species} is ${this.weight - human.weight}kg. heavier than you!`;
  } if (this.weight == human.weight) {
    return `${this.species} and you have the same weight!`;
  }
  return `You are ${human.weight - this.weight}kg. heavier than a ${this.species}.`;
};

// Dino method 2 (height)
// eslint-disable-next-line no-shadow
Dino.prototype.methodHeight = function (human) {
  if (this.height > human.height) {
    return `${this.species} is ${this.height - human.height}cm. taller than you!`;
  } if (this.height == human.height) {
    return `${this.species} and you have the same height!`;
  }
  return `You are ${human.height - this.height}cm. taller than a ${this.species}.`;
};

// Dino method 3 (diet)
// eslint-disable-next-line no-shadow
Dino.prototype.methodDiet = function (human) {
  if (this.diet == human.diet) {
    return `You and a ${this.species} eat pretty much the same things. Probably you cook better than them!`;
  }
  return 'You two are quite different when it comes to diet.';
};

// Generate Tiles
const getHumanTile = () => `<div class="grid-item">
      <h3>Human</h3>
      <img src="images/human.png">
      <h4>${human.species}</h4> 
      </div>`;

const getDinoTile = (dino) => `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4 id='dino-fact'>${dino.fact}</h4>
    </div>`;

const getDinoTileDiet = (dino) => `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4>The ${dino.species} was ${dino.diet}.</h4>
    <h4 id='compare-fact'>${dino.methodDiet(human)}</h4>
    </div>`;

const getDinoTileWeight = (dino) => `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4>${dino.methodWeight(human)}</h4>
    </div>`;

const getDinoTileHeight = (dino) => `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4>${dino.methodHeight(human)}</h4>
    </div>`;

const getDinoTileWhen = (dino) => `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4>The ${dino.species} lived in the ${dino.when} period.</h4>
    </div>`;

// Get a HTML string back with the dino and human tiles and placed it on .grid
function fillGrid() {
  let str = '';
  // Random number that is not repeated from a dino array. Human and pigeon are not included in this array. https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js/18806417
  function* randomNumber(arr) {
    let i = arr.length;
    while (i--) {
      yield arr.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    }
  }
  // Variable without the pigeon to use it in a method ahead
  const ranNums = randomNumber([dino1, dino2, dino3, dino4, dino5, dino6, dino7]);
  for (let i = 0; i < myArray.length; i++) {
    // Generate a random dino from the array that is not pigeon or human
    const random1 = ranNums.next().value;
    const random2 = ranNums.next().value;
    const random3 = ranNums.next().value;
    const random4 = ranNums.next().value;
    // loop that will iterate through my array and paint the dif comparative methods in my HTML
    if (myArray[i] == human) {
      str += getHumanTile();
    } else if (random1 == myArray[i]) {
      str += getDinoTileDiet(random1);
    } else if (random2 == myArray[i]) {
      str += getDinoTileWeight(random2);
    } else if (random3 == myArray[i]) {
      str += getDinoTileHeight(random3);
    } else if (random4 == myArray[i]) {
      str += getDinoTileWhen(random4);
    } else {
      str += getDinoTile(myArray[i]);
    }
  }
  str += getButton();
  return str;
}

function tileDOM() {
  const grid = document.getElementById('grid');
  grid.innerHTML = fillGrid();
}

// Remove form from screen
function removeForm() {
  form.style.display = 'none';
}

function refreshBoard() {
  createCustomArray();
  tileDOM(human);
}

function onClick() {
  human = (getUserData = () => {
    species = document.getElementById('name').value;
    diet = document.getElementById('diet').value;
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;
    return new Animal(species, weight, height, diet);
  })();
  if (human.species == '' || human.weight == '' || human.height == '') {
    // eslint-disable-next-line no-alert
    alert('Please check all fields are complete');
  } else {
    removeForm();
    refreshBoard();
  }
}

// On button click, prepare and display infographic
button.addEventListener('click', onClick);

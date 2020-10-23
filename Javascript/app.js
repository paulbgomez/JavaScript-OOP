//Global variables
const human = new Animal;

const form =  document.getElementById('dino-compare');

const button = document.getElementById('btn');

const getButton = () => {
    return `<div id='newBtn' onclick="refreshBoard()">Compare Me Again!</div>`
}

// Create Animal Class with Dino subclass 
function Animal (species, weight, height, diet, image){
    this.species=species;
    this.weight=weight;
    this.height=height;
    this.diet=diet;
    this.image=image
    };

function Dino (species, weight, height, diet, where, when, fact, image) {
    Animal.call(this, species, weight, height, diet, image)
    this.where = where;
    this.when = when;
    this.fact = fact;
    };

// Create Dino Objects 
const dino1 = new Dino(
    "Triceratops",
    5895,
    3474,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "First discovered in 1889 by Othniel Charles Marsh"
);
const dino2 = new Dino(
    "Tyrannosaurus Rex",
    5400,
    4390,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "The largest known skull measures in at 5 feet long."
);
const dino3 = new Dino(
    "Anklyosaurus",
    4760,
    1676,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "Anklyosaurus survived for approximately 135 million years."
);
const dino4 = new Dino(
    "Brachiosaurus",
    31700,
    11338,
    "herbavor",
    "North America",
    "Late Jurasic",
    "An asteroid was named 9954 Brachiosaurus in 1991."
);
const dino5 = new Dino(
    "Stegosaurus",
    5260,
    2408,
    "herbavor",
    "North America, Europe, Asia",
    "Late Jurasic to Early Cretaceous",
    "The Stegosaurus had between 17 and 22 seperate places and flat spines."
);
const dino6 = new Dino(
    "Elasmosaurus",
    7260,
    1799,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Elasmosaurus was a marine reptile first discovered in Kansas."
);
const dino7 = new Dino(
    "Pteranodon",
    60,
    610,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Actually a flying reptile, the Pteranodon is not a dinosaur."
);
const dino8 = new Dino(
    "Pigeon",
    0.2,
    27,
    "herbavor",
    "World Wide",
    "Holocene",
    "All birds are living dinosaurs."
);
const myArray = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8];//Dinosaurs are group in an array
const ranNums = randomNumber([dino1, dino2, dino3, dino4, dino5, dino6, dino7]); //Variable without the pigeon to use it in a method ahead

//Generate dino array and shuffle function. Stackoverflow shuffle method (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
function createCustomArray() {
    if (myArray.includes(human)) {
        myArray.splice(4,1);
    }
    for (let i = myArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [myArray[i], myArray[j]] = [myArray[j], myArray[i]];
    }
    myArray.splice(4,0,human);//Put value human in the middle of the array
    return myArray;
};

//Random number that is not repeated from a dino array. Human and pigeon are not included in this array. https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js/18806417
function* randomNumber(arr) {
    let i = arr.length;
    while (i--) {
        yield arr.splice(Math.floor(Math.random() * (i+1)), 1)[0];
    }
}

// Get human data from form
const getUserData = () => {
    human.species = document.getElementById('name').value;
    human.diet = document.getElementById('diet').value;
    human.weight = document.getElementById('weight').value;
    human.height = document.getElementById('height').value;
    return human
}

//Dino method 1 (weight)
  Dino.prototype.methodWeight = function(human) {
    if (this.weight > human.weight){
        return `${this.species} is ${this.weight - human.weight}kg. heavier than you!`
    } else if (this.weight == human.weight){
        return `${this.species} and you have the same weight!`
    } else {
        return `You are ${human.weight - this.weight}kg. heavier than a ${this.species}.`
    }
  };

//Dino method 2 (height)
Dino.prototype.methodHeight = function(human) {
    if (this.height > human.height){
        return `${this.species} is ${this.height - human.height}cm. taller than you!`
    } else if (this.height == human.height){
        return `${this.species} and you have the same height!`
    } else {
        return `You are ${human.height - this.height}cm. taller than a ${this.species}.`
    }
  };

//Dino method 3 (diet) 
Dino.prototype.methodDiet = (human) => 
    (this.diet == human.diet) ? 
    `You and a ${this.species} eat pretty much the same things. Probably you cook better than them!` 
    : 
    `You two are quite different when it comes to diet.`;
 
// Generate Tiles 
const getHumanTile = () => {
    return `<div class="grid-item">
      <h3>Human</h3>
      <img src="images/human.png">
      <h4>${human.species}</h4> 
      </div>`;
  };

const getDinoTile = (dino) => {
    return `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4 id='dino-fact'>${dino.fact}</h4>
    </div>`
}

const getDinoTileDiet = (dino) => {
    return `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4>The ${dino.species} was ${dino.diet}.</h4>
    <h4 id='compare-fact'>${dino.methodDiet(human)}</h4>
    </div>`
}

const getDinoTileWeight = (dino) => {
    return `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4>${dino.methodWeight(human)}</h4>
    </div>`
}

const getDinoTileHeight = (dino) => {
    return `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4>${dino.methodHeight(human)}</h4>
    </div>`
}

const getDinoTileWhen = (dino) => {
    return `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4>The ${dino.species} lived in the ${dino.when} period.</h4>
    </div>`
}

//Get a HTML string back with the dino and human tiles and placed it on .grid
function fillGrid(){
    const random1 =ranNums.next().value; //Generate a random dino from the array that is not pigeon or human
    const random2 =ranNums.next().value;
    const random3 =ranNums.next().value;
    const random4 =ranNums.next().value;
    let str = '';                        
    for (let i = 0; i < myArray.length; i++) { //loop that will iterate through my array and paint the different comparative methods in my HTML
        if (myArray[i] == human) {
            str = str + getHumanTile();
        } else if (random1 == myArray[i]) {
            str = str + getDinoTileDiet(random1);
        } else if (random2 == myArray[i]) {
            str = str + getDinoTileWeight(random2);
        } else if (random3 == myArray[i]) {
            str = str + getDinoTileHeight(random3); 
        } else if (random4 == myArray[i]) {
            str = str + getDinoTileWhen(random4);    
        } else {
            str = str + getDinoTile(myArray[i]);
        }   
    };
    str = str + getButton();
    return str;
}

function tileDOM() {
    let grid = document.getElementById('grid'); 
    grid.innerHTML = fillGrid();
}

// Remove form from screen
function removeForm() {
    form.style.display = 'none';
}

// On button click, prepare and display infographic
    button.addEventListener('click', onClick);

    function refreshBoard() {
        createCustomArray();
        tileDOM();
    }

    function onClick(){
        getUserData();
        if (human.species == '' || human.weight == '' || human.height == ''){
            alert ('Please check all fields are complete')
        }
        else {
        removeForm();
        refreshBoard();
        };
    }
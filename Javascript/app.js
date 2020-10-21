     // Create Animal Class with Dino/Human subclass 
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

    function Human(species, weight, height, diet, when, fact, image) {
        Animal.call(this, weight, height, diet, image)
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
        20,
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
    // Create Human Object

const human = new Human;

    // Get human data from form 

const userData = () => {
    human.species = document.getElementById('name').value;
    human.diet = document.getElementById('diet').value;
    human.weight = document.getElementById('weight').value;
    human.height = document.getElementById('height').value;
    human.when = document.getElementById('year').value;
    human.fact = '';
    human.image = '';
    return human
}

//Generate dino array and shuffle function. Stackoverflow shuffle method (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)

const myArray = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8];

function shuffle(myArray) {
    for (let i = myArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [myArray[i], myArray[j]] = [myArray[j], myArray[i]];
    }
    return myArray;
};

myArray.splice(4, 0, human); //Put value human in the middle of the array (https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript)

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
    `Welp. You two are quite different when it comes to diet.`;

//Random number that is not repeated from a dino array. Human and pigeon are not included. https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js/18806417
function* randomNumber(myArray) {
    let i = myArray.length;
    while (i--) {
        yield myArray.splice(Math.floor(Math.random() * (i+1)), 1)[0];
    }
}

let ranNums = randomNumber([dino1, dino2, dino3, dino4, dino5, dino6, dino7]);
   
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
    <h4>${dino.fact}</h4>
    </div>`
}

const getDinoTileDiet = (dino) => {
    return `<div class="grid-item">
    <h3>${dino.species}</h3>
    <img src="images/${dino.species.toLowerCase()}.png">
    <h4>${dino.methodDiet(human)}</h4>
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

//Generate a new compare button
const getButton = () => {
    return `<div id='newBtn'>Compare Me Again!</div>`
}

//Get a HTML string back with the dino and human tiles and placed it on .grid
function fillGrid(){
    let random1 =ranNums.next().value; //Generate a random dino from the array that is not pigeon or human
    let random2 =ranNums.next().value;
    let random3 =ranNums.next().value;
    let str = '';
    for (let i = 0; i < myArray.length; i++) {
        if (i == 4) {
            str = str + getHumanTile();
        } else if (random1 == myArray[i]) {
            str = str + getDinoTileDiet(random1);
        } else if (random2 == myArray[i]) {
            str = str + getDinoTileWeight(random2);
        } else if (random3 == myArray[i]) {
            str = str + getDinoTileHeight(random3); 
        } else {
            str = str + getDinoTile(myArray[i]);
        }   
    };
    str = str + getButton();
    return str;
}

// Remove form from screen
const form =  document.getElementById('dino-compare');

function removeForm() {
    form.style.display = 'none';
}

// On button click, prepare and display infographic
    const button = document.getElementById('btn');
    button.addEventListener('click', onClick);

    function onClick(){
        userData();
        tileDOM();
        removeForm();
    }

    function tileDOM() {
        let grid = document.getElementById('grid');
        grid.innerHTML = fillGrid();
    }
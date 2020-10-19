
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
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = image;
    };

    function Human(species, weight, height, diet, when, fact, image) {
        Animal.call(this, weight, height, diet, image)
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.when = when;
        this.fact = fact;
        this.image = image;
    };
/*
// Create Dino Constructor
    function Dino (species, weight, height, diet, where, when, fact){
        this.species=species;
        this.weight=weight;
        this.height=height;
        this.diet=diet;
        this.where=where;
        this.when=when;
        this.fact=fact
    };
 */   
    // Create Dino Objects
    const dino1 = new Dino(
        "Triceratops",
        5895,
        114,
        "herbavor",
        "North America",
        "Late Cretaceous",
        "First discovered in 1889 by Othniel Charles Marsh"
    );
    const dino2 = new Dino(
        "Tyrannosaurus Rex",
        5400,
        144,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "The largest known skull measures in at 5 feet long."
    );
    const dino3 = new Dino(
        "Anklyosaurus",
        4760,
        55,
        "herbavor",
        "North America",
        "Late Cretaceous",
        "Anklyosaurus survived for approximately 135 million years."
    );
    const dino4 = new Dino(
        "Brachiosaurus",
        31700,
        372,
        "herbavor",
        "North America",
        "Late Jurasic",
        "An asteroid was named 9954 Brachiosaurus in 1991."
    );
    const dino5 = new Dino(
        "Stegosaurus",
        5260,
        79,
        "herbavor",
        "North America, Europe, Asia",
        "Late Jurasic to Early Cretaceous",
        "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    );
    const dino6 = new Dino(
        "Elasmosaurus",
        7260,
        59,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Elasmosaurus was a marine reptile first discovered in Kansas."
    );
    const dino7 = new Dino(
        "Pteranodon",
        20,
        20,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Actually a flying reptile, the Pteranodon is not a dinosaur."
    );
    const dino8 = new Dino(
        "Pigeon",
        0.2,
        9,
        "herbavor",
        "World Wide",
        "Holocene",
        "All birds are living dinosaurs."
    );
    
console.log(dino5);

    // Create Human Object

const human = new Human();


    // Use IIFE to get human data from form
const button = document.getElementById("btn");
document.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', userData)
});

const userData = () => {
    (function(human) {
        human.species = document.getElementById('name').value;
        human.diet = document.getElementById('diet').value;
        human.weight = document.getElementById('weight').value;
        human.height = document.getElementById('height').value;
        human.when = document.getElementById('year').value;
        human.fact = "";
        human.image = 
    }());
};

//Create a dino array and select a random one to compare with human


console.log(typeof human)



//Dino method 1 (weight)

  Dino.prototype.methodWeight = function() {
    if (this.weight > human.weight){
        return `${this.species} is ${this.weight - human.weight}kg. heavier than you!`
    } else if (this.weight == human.weight){
        return `${this.species} and you have the same weight!`
    } else {
        return `You are ${human.weight - this.weight}kg. heavier than a ${this.species}.`
    }
  };

//Dino method 2 (height)

Dino.prototype.methodHeight = function() {
    if (this.height > human.height){
        return `${this.species} is ${this.height - human.height}cm. taller than you!`
    } else if (this.height == human.height){
        return `${this.species} and you have the same height!`
    } else {
        return `You are ${human.height - this.height}kg. taller than a ${this.species}.`
    }
  };

//Dino method 3 (diet)
  
  Dino.prototype.methodDiet = function() {
    if (this.diet === human.diet) {
      return `You and a ${this.species} eat pretty much the same things. Probably you cook better than them!`;
    } else {
      return `Welp. You two are quite different when it comes to diet.`;
    }
  };


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

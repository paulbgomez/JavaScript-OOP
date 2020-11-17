class Human extends Animal {

    methodWeight = function (dino) {
        if (dino.weight > this.weight) {
        return `${dino.species} is ${dino.weight - this.weight}lbs heavier than you!`;
        } if (dino.weight == this.weight) {
        return `${dino.species} and you have the same weight!`;
        }
        return `You are ${this.weight - dino.weight}lbs heavier than a ${dino.species}.`;
    };
    
    methodHeight = function (dino) {
        if (dino.height > this.height) {
        return `${dino.species} is ${dino.height - this.height}ft taller than you!`;
        } if (dino.height == this.height) {
        return `${dino.species} and you have the same height!`;
        }
        return `You are ${this.height - dino.height}ft taller than a ${dino.species}.`;
    };
    
    methodDiet = function (dino) {
        if (this.diet == dino.diet) {
        return `You and a ${dino.species} eat pretty much the same things. Probably you cook better than them!`;
        }
        return 'You two are quite different when it comes to diet.';
    };

}
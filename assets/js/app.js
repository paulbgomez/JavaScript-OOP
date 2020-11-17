
   window.onload = function(){

    // Variables
    const url = 'https://raw.githubusercontent.com/paulbgomez/JavaScript-OOP/main/dino.json';
    let dataJSON; // Dino[];
    let dataForm = {};
    const form = document.getElementById('dino-compare');
    const grid = document.getElementById('grid');
    const newBtn = document.getElementById('nuevo-btn');
    newBtn.style.display = 'none';


    // charging info from the JSON file // OK
    dataJSON = readTextFile(url);

    // Button to start comparing
    const button = document.getElementById('btn');
    button.addEventListener('click', initApp);

    function initApp() {

      // 1º Cherge dataJSON // OK
      dataJSON = readTextFile(url);
      let objectJSON = JSON.parse(dataJSON);
      let listaDino = objectJSON.Dinos;

      // 2º dataForm charges user input // OK
      getUserData(dataForm);
      let person = new Human(dataForm);

      // 3º hide form // OK
      removeForm();

      // 4º Shuffle dino aray with human always in the middle // OK
      let fullArray = valueMiddleArray(shuffleArray(listaDino), person);

      // 5ª Generate a random array that determines which animals will be compared Ej -> [1, 0, 0, 0, 0, 1, 1, 0, 0] // OK
      let arrayImplicationsAnimals = [];
      function fillArrayImplications() {
        for(let i = 0; i < fullArray.length; i++){
          let implica = Math.floor(Math.random()*2);
          arrayImplicationsAnimals.push(implica);
        }
        arrayImplicationsAnimals[4] = 0;
      }
      fillArrayImplications();

      let tilesHTML = '';
  
      // 6º Loop that goes through fullArray and compare with dinos or displays the fact // OK
      for(let i = 0; i < fullArray.length; i++){

        tilesHTML += '<div class="grid-item">';
        tilesHTML += '<h3>' + fullArray[i].species + '</h3>';

        if(arrayImplicationsAnimals[i]){
          let comparisonMethod = Math.floor(Math.random() * 3);
          switch(comparisonMethod){
            case 0:
              tilesHTML += '<img src="assets/images/' + fullArray[i].species.toLowerCase() + '.png" />';
              tilesHTML += '<h4>' + person.methodWeight(fullArray[i]) + '</h4>';
              break;
            case 1:
              tilesHTML += '<img src="assets/images/' + fullArray[i].species.toLowerCase() + '.png" />';
              tilesHTML += '<h4>' + person.methodDiet(fullArray[i]) + '</h4>';
                break;
            case 2:
              tilesHTML += '<img src="assets/images/' + fullArray[i].species.toLowerCase() + '.png" />';
              tilesHTML += '<h4>' + person.methodHeight(fullArray[i]) + '</h4>';
              break;
          }
        }
        else if(i === 4){
          tilesHTML += '<img src="assets/images/human.png" />';
          tilesHTML += '<h4></h4>';
        }
        else{
          tilesHTML += '<img src="assets/images/' + fullArray[i].species.toLowerCase() + '.png" />';
          tilesHTML += '<h4>' + fullArray[i].fact + '</h4>';
        }
        tilesHTML += '</div>';
      }

      // Paint the tiles // OK
      grid.innerHTML = tilesHTML;

      showNewButton();
    }

    function getUserData(input) {
      input.species = document.getElementById('name').value;
      input.diet    = document.getElementById('diet').value;
      input.weight  = parseInt(document.getElementById('weight').value);
      input.height  = parseInt(document.getElementById('height').value);
      }

    const removeForm = () => {
      form.style.display = 'none';
    };

    function showNewButton() {
      newBtn.innerHTML = 'Compare Me Again';
      newBtn.style.display = 'block';
      newBtn.addEventListener('click', refreshBoard);
    }

    function refreshBoard() {
      initApp();
    }
   };

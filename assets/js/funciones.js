/* eslint-disable eqeqeq */
// Function that reads an external file async (stack overflow)
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText = '';
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }

    rawFile.send(null);
    
    return allText;

}

// Randomize the order of the elements inside an array -> ej: 7, 4, 5, 2, 1, 0, 8, 3
function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// put a value in the middle of an array
function valueMiddleArray(arr, persona) {
  arr.splice((arr.length/2), 0, persona);
  return arr;
}


const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span"); 
  target.appendChild(letter); // 
  letter.textContent = array[wordIndex][letterIndex]; 
  setTimeout(() => {
    letter.remove();
  }, 1000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++; 
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 1000); // synchro avec le letter.remove
    }
  }, 100); // vitesse apparition des lettre
};
loop(); 

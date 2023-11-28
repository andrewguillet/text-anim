const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span"); // injecter lettre ds html
  target.appendChild(letter); // comme bulles, rajoute un enfant qui est enfant de target
  letter.textContent = array[wordIndex][letterIndex]; // dire quelle lettre on start 0 avec le let en haut
  setTimeout(() => {
    // pr dire que le mot doit disparaitre pr laisser place a l'autre faut synchro
    letter.remove();
  }, 1000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      //pour dire qd terminé de recommencé au 1er mot
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      // changer lettre jusqu'a la length du mot
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++; // qd letterIndex terminé en haut on dit qu'on change de mot
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 1000); // synchro avec le letter.remove
    }
  }, 100); // vitesse apparition des lettre
};
loop(); // pr jouer la fonction

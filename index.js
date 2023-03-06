// create an AudioContext object
const audioContext = new AudioContext();

// create initial oscillator with default frequency
let oscillator = createOscillator();

oscillator.connect(audioContext.destination);

// helper function to add/remove classes
function toggleClasses(selector) {
  const element = document.querySelector(selector);
  element.classList.toggle('shaker');
  element.classList.toggle('shadowColor');
}

// key-value pairs for buttons
const buttons = {
  "0": { selector: ".d_4", frequency: 440 },
  "1": { selector: ".d_7", frequency: 523.25 },
  "2": { selector: ".d_1", frequency: 587.33 },
  "3": { selector: ".d_3", frequency: 659.25 },
  "4": { selector: ".d_2", frequency: 698.46 },
  "5": { selector: ".d_8", frequency: 783.99 },
  "6": { selector: ".d_11", frequency: 880 },
  "7": { selector: ".d_6", frequency: 987.77 },
  "8": { selector: ".d_9", frequency: 1046.5 },
  "9": { selector: ".d_12", frequency: 1174.7 },
  "+": { selector: ".d_10", frequency: 1318.5 },
  "-": { selector: ".d_5", frequency: 1396.9 }
};

let timerId = null;

// add event listeners to buttons
window.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/^\d$/.test(key) || key === "+" || key === "-") {

    toggleClasses(buttons[key].selector);

    oscillator.stop();

    // create a new oscillator
    oscillator = createOscillator(buttons[key].frequency);

    // connect the new oscillator to the audio output
    oscillator.connect(audioContext.destination);

    // start the new oscillator
    oscillator.start();

  } else {
    alert("PLEASE ENTER A NUMBER BETWEEN 0-9 ONLY");
  }
});

window.addEventListener('keyup', function(event) {
  const key = event.key;

  if (/^\d$/.test(key) || key === "+" || key === "-") {
    toggleClasses(buttons[key].selector);

    oscillator.stop();
  }
});

// helper function to create a new oscillator node with a specified frequency
function createOscillator(frequency = 440) {
  const oscillator = audioContext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  oscillator.start();
  return oscillator;
}

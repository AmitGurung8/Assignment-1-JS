// Name - AMIT GURUNG
// GEORGIAN STUDENT ID - 200591609
// LAKEHEAD STUDENT ID - 1232183
// Client-Side JavaScript
// ASSIGNMENT-1

// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');

// Constants for p tag to display query selectors
const noun1Display = document.querySelector('#choosenNoun1');
const verbDisplay = document.querySelector('#choosenVerb');
const adjectiveDisplay = document.querySelector('#choosenAdjective');
const noun2Display = document.querySelector('#choosenNoun2');
const settingDisplay = document.querySelector('#choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.querySelector('#playback');
const randomButton = document.querySelector('#random');
const resetButton = document.querySelector('#reset');

// Constants for the student ID element
const studentIdElement = document.querySelector('#studentId');

// Variables for pre-defined arrays
const nouns1Array = ['Tom', 'Jerry', 'Spike'];
const verbsArray = ['chased', 'outsmarted', 'tricked'];
const adjectivesArray = ['clever', 'mischievous', 'persistent'];
const nouns2Array = ['pie', 'mousehole', 'trap'];
const settingsArray = ['in the kitchen', 'at the garden', 'in the living room'];
const storyElement = document.querySelector('#story');

var amittt = [];
var amitIndex = 0;

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;
var interval = null;

// Function to set student ID dynamically
function setStudentId() {
    const studentName = 'Amit Gurung';
    const studentId = '200591609';
    studentIdElement.textContent = `Student ID: ${studentId} - ${studentName}`;
}

// Call setStudentId on page load
window.addEventListener('load', setStudentId);

/* Functions
-------------------------------------------------- */

// Function to handle noun1 button click
function noun1_on_click() {
    noun1Display.textContent = nouns1Array[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1Array.length;
    setStudentId();
}

// Function to handle verb button click
function verb_on_click() {
    verbDisplay.textContent = verbsArray[verbCount];
    verbCount = (verbCount + 1) % verbsArray.length;
    setStudentId();
}

// Function to handle adjective button click
function adjective_on_click() {
    adjectiveDisplay.textContent = adjectivesArray[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectivesArray.length;
    setStudentId();
}

// Function to handle noun2 button click
function noun2_on_click() {
    noun2Display.textContent = nouns2Array[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2Array.length;
    setStudentId();
}

// Function to handle setting button click
function setting_on_click() {
    settingDisplay.textContent = settingsArray[settingCount];
    settingCount = (settingCount + 1) % settingsArray.length;
    setStudentId();
}

// Function to concatenate the user story
function playback_on_click() {
    const userStory = `${noun1Display.textContent} ${verbDisplay.textContent} ${adjectiveDisplay.textContent} ${noun2Display.textContent} ${settingDisplay.textContent}`;
    amittt[storyElement] = userStory;
    amitty();
    setStudentId();
}

// Function to grab random element from arrays, concatenate, and display
function random_on_click() {
    const randomNoun1 = nouns1Array[Math.floor(Math.random() * nouns1Array.length)];
    const randomVerb = verbsArray[Math.floor(Math.random() * verbsArray.length)];
    const randomAdjective = adjectivesArray[Math.floor(Math.random() * adjectivesArray.length)];
    const randomNoun2 = nouns2Array[Math.floor(Math.random() * nouns2Array.length)];
    const randomSetting = settingsArray[Math.floor(Math.random() * settingsArray.length)];

    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
    amittt[storyElement] = randomStory;
    amitty();
    setStudentId();
}

// Function to reset the chosen words and story
function reset() {
    noun1Count = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    settingCount = 0;

    noun1Display.textContent = '';
    verbDisplay.textContent = '';
    adjectiveDisplay.textContent = '';
    noun2Display.textContent = '';
    settingDisplay.textContent = '';

    storyElement.textContent = '';
    amittt[storyElement] = '';
    amitIndex = 0;

    setStudentId();
}

function amitty() {
    clearInterval(interval);
    amitIndex = 0;  
    storyElement.innerHTML = "";
    interval = setInterval(repeat, 20);
}

function repeat() {
    storyElement.textContent += amittt[storyElement][amitIndex++]; 
    if (amitIndex == amittt[storyElement].length) {
        clearInterval(interval);
        amitIndex = 0;
    }
}

/* Event Listeners
-------------------------------------------------- */
// Add event listeners to each button, linking them to their respective click functions
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
resetButton.addEventListener('click', reset);

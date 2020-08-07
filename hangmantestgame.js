var readline = require('readline-sync');
//Player guess
var guess;

//Game lives
var lives;

//Display category type
var category;

//Selected word from the array of animals
var Word;

var alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Array of animals
var WordCollection = ["SHARK", "DOLPHIN", "DONKEY","SPIDER", "LIZARD", "TURTLE", "SNAKE", "LEOPARD", "SEAL", "ELEPHANT",
 "WHALE", "DOG", "PENGUIN", "BEAR", "LION", "TIGER","PANDA","GOAT","KOALA","FOX","MOUSE","PIG","MONKEY","DEER","GIRAFFE","HORSE",
 "OTTER","OX","RACCOON","BAT","ZEBRA","SQUIRREL", "MOTH","OWL","FROG","CROCODILE","PARROT","CHAMELEON","SNAIL","FISH"];

// Pick a random animal from the word array 
Word = WordCollection[Math.floor(Math.random() * WordCollection.length)];
console.log(Word);

// answerArray shows how many letters are there using _ (underscores) 
var answerArray = [];
for (var i = 0; i < Word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = Word.length;

function getName () {
    console.log("\n -= Welcome to Hangman=- \n");
     name = readline.question("Please enter your name: ");
     category = "\n"+"The category is ANIMALS"+"\n";
    console.log(category);
     console.log(JSON.stringify(answerArray)+"\n");
    console.log(JSON.stringify(alphabets)+"\n");
}

getName()

// Show player their progress | .join returned answer as a string
while (remainingLetters > 0) {
    (answerArray.join(""));

    guess = readline.question("Guess a letter: ");
    guess = guess.toUpperCase();

    //if guess is more than 1 letter or no letter, alert player to guess 1 letter only
     if (guess.length !== 1) {
        console.log("Please enter 1 letter only.");
    }

    //if valid guess
    else {
        for (var j = 0; j < Word.length; j++) {
            if (Word[j] == guess) {
                answerArray[j] = guess;
                remainingLetters--;
                j = Word.length;
                console.log("Good job! "+guess+" is one of the letters!\n");
                console.log(JSON.stringify(answerArray)+"\n");
                console.log(JSON.stringify(alphabets)+"\n");
            }
            else if (Word[j] !== guess) {
                console.log("Sorry. "+guess+" is not a part of the word.\n");
                console.log(JSON.stringify(answerArray)+"\n");
                console.log(JSON.stringify(alphabets)+"\n");
            }
        }
    }

    if (remainingLetters == 0) {
        console.log("Conguatulation! You managed to guess the word! \n");
        break;
    }
}



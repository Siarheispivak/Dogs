// function bark(name, weight) {
//     if (weight > 20) {
//         console.log(name + " says WOOF WOOF");
//     } else {
//         console.log(name + " says woof woof");
//     }
// }
// bark("rover", 23);
// bark("spot", 13);
// bark("spike", 53);
// bark("lady", 17);




// function doIt(param) {
//     param = 2;
// }
// let test = 1;
// doIt(test);
// console.log(test);



// function bake(degrees) {
//     let message;

//     if (degrees > 500) {
//         message = "I'm not a nuclear reactor!";
//     } else if (degrees < 100) {
//         message = "I'm not a refrigirator!";
//     } else {
//         message = "That's a nice temperature!";
//         setMode("bake");
//         setTemp(degrees);
//     }
//     return message;
// }

// let status = bake(350);


// dogs.js:34 Uncaught ReferenceError: setMode is not defined
//     at bake (dogs.js:34)
//     at dogs.js:40






// function clunk(times) {
//     let num = times;
//     while (num > 0) {
//         display("clunk");
//         num = num - 1;
//     }
// }

// function thingamajig(size) {
//     let facky = 1;
//     clunkCounter = 0;
//     if (size == 0) {
//         display("clank");
//     } else if (size == 1) {
//         display("thunk");
//     } else {
//         while (size > 1) {
//             facky = facky * size;
//             size = size - 1;
//         }
//         clunk(facky);
//     }
// }

// function display(output) {
//     console.log(output);
//     clunkCounter = clunkCounter + 1;
// }
// let clunkCounter = 0;
// thingamajig(4);
// console.log(clunkCounter);



// Не понял для чего balance 10500!!!!
// let balance = 10500;
// let cameraOn = true;

// function steal(balance, amount) {
//     cameraOn = false;
//     if (amount < balance) {
//         balance = balance - amount;
//     }
//     return amount;
//     cameraOn = true;
// }

// let amount = steal(balance, 1250);
// alert("criminal: you stole" + amount + "!");







// function makePhrases() {
//     let words1 = ["24/7", "multi-tier", "30,000 foot", "b-to-b", "win-win"];
//     let words2 = ["empowered", "value-added", "oriented", "focuse", "aligned"];
//     let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];



//     let rand1 = Math.floor(Math.random() * words1.length);
//     let rand2 = Math.floor(Math.random() * words2.length);
//     let rand3 = Math.floor(Math.random() * words3.length);

//     let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//     alert(phrase);
// }
// makePhrases();
// работает норм,просто рандомам выдаёт содержимое 3-х разных масивов)



// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// let output;
// let i = 0;
// while (i < scores.length) {
//     output = "Bubble solutuion #" + i + " score: " + scores[i];
//     console.log(output);
//     i = i + 1;
// }




// let products = ["choo choo", "icy mint", "Cake butter", "Bubblegum"];
// let hasBubbleGum = [false, false, false, true];
// let i = 0;
// while (i < hasBubbleGum.length) {
//     if (hasBubbleGum[i]) {
//         console.log(products[i] + " contains bubble gum");
//     }
//     i = i + 1;
// }



// let products = ["choo choo", "icy mint", "Cake butter", "Bubblegum"];
// let hasBubbleGum = [false, false, true, true];

// for (let i = 0; i < hasBubbleGum.length; i = i + 1) {
//     if (hasBubbleGum[i]) {
//         console.log(products[i] + " contains bubble gum");
//     }

// }





// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// let output;
// let highScore = 0;
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > highScore) {
//         highScore = scores[i];
//     }
//     console.log("Bubble test : " + highScore);
// }



// output = "Bubble solutuion #" + i + " score: " + scores[i];
// console.log(output);










// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// let output;
// let highScore = 0;
// for (let i = 0; i < scores.length; i++) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);

//     if (scores[i] > highScore) {
//         highScore = scores[i];
//     }
// }
// console.log("Bubble tests : " + scores.length);
// console.log("Highest bubble score: " + highScore);

// let bestSolutions = [];
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore)
//         bestSolutions.push(i);
// }

// console.log("Solutions with the highest score: " + bestSolutions);




















// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// let output;
// let highScore = 0;
// for (let i = 0; i < scores.length; i++) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);

//     if (scores[i] > highScore) {
//         highScore = scores[i];
//     }
// }
// console.log("Bubble tests : " + scores.length);
// console.log("Highest bubble score: " + highScore);

// let bestSolutions = [];
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore)
//         bestSolutions.push(i);
// }

// console.log("Solutions with the highest score: " + bestSolutions);





// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// function printAndGetHighScore(scores) {
//     let highScore = 0;
//     let output;
//     for (let i = 0; i < scores.length; i++) {
//         output = "Bubble solution # " + i + " score: " + scores[i];
//         console.log(output);
//         if (scores[i] > highScore) {
//             highScore = scores[i];
//         }
//     }
//     return highScore;
// }

// function getBestResults(scores, highScore) {
//     let bestSolutions = [];
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] == highScore) {
//             bestSolutions.push(i);
//         }
//     }
//     return bestSolutions;
// }
// let highScore = printAndGetHighScore(scores);

// console.log("Bubble tests : " + scores.length);
// console.log("Highest bubble score: " + highScore);

// let bestSolutions = getBestResults(scores, highScore);
// console.log("Solutions with the highest score: " + bestSolutions);








// Рассмотреть в чём ошибка !!!console.log!!!

// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// function printAndGetHighScore(scores) {
//     let highScore = 0;
//     let output;
//     for (let i = 0; i < scores.length; i++) {
//         output = "Bubble solution # " + i + " score: " + scores[i];
//         console.log(output);
//         if (scores[i] > highScore) {
//             highScore = scores[i];
//         }
//     }
//     return highScore;
// }

// function getBestResults(scores, highScore) {
//     let bestSolutions = [];
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] == highScore) {
//             bestSolutions.push(i);
//         }
//     }
//     return bestSolutions;
// }
// let highScore = printAndGetHighScore(scores);

// console.log("Bubble tests : " + scores.length);
// console.log("Highest bubble score: " + highScore);

// let bestSolutions = getBestResults(scores, highScore);
// console.log("Solutions with the highest score: " + bestSolutions);




// function getMostCostEffectiveSolution(score, costs, highScore) {
//     let cost = 100;
//     let index;
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] == highScore) {
//             if (cost > costs[i]) {
//                 index = i;
//                 cost = costs[i];

//             }
//         }

//     }
//     return index;
// }
// let mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
// console.log("bubble Solution #" + mostCostEffective + " is the most cost effective");







const foo = [1, 2, 3];
const [n] = foo;
console.log(n);













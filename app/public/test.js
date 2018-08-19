// var answerCorrect = false;
var count = 0;
var correctCount = 0;
var wrongCount = 0;
var userClick = "";
var clicked = false;
var userClickA = false;
var userClickB = false;
var userClickC = false;
var userClickD = false;
run();

$("#game-reset").on('click', gameReset());

// INITIATE GAME RESET
function gameReset() {
count = 0;
correctCount = 0;
wrongCount = 0;
userClick = "";
clicked = false;
userClickA = false;
userClickB = false;
userClickC = false;
userClickD = false;
questionID;
questionDeclared;
questionChoice;

run();
};

// THIS FUNCTION CHANGES THE QUESTION AND ANSWER KEY IMMEDIATELY FOLLOWING LAST QUESTION SELECTION
$("#next-play").on('click', function() {
    if (count === 6) {
        $("#question-box").html('<h1>' + 'Score: ' + correctCount 
        + ' out of ' + count +'<h1>')
        
    } else {
    userClick = "";
    clicked = false;
    userClickA = false;
    userClickB = false;
    userClickC = false;
    userClickD = false;
    questionID;
    questionDeclared;
    questionChoice;
    j = Math.floor(Math.random() * carQuestions.length);

    $("#random-img").html('<img src="' + carImgArr[Math.floor(Math.random() * (carImgArr.length))] + '"width="360px" ">');


    // $(".question-number").html("<h4>" + questionID[j] + "</h4>");
    $(".question-asked").html("<h4>" + questionDeclared[j] + "<h4>");
    $(".text-a").html("<h4>" + questionChoice[j].a + "</h4>");
    $(".text-b").html("<h4>" + questionChoice[j].b + "</h4>");
    $(".text-c").html("<h4>" + questionChoice[j].c + "</h4>");
    $(".text-d").html("<h4>" + questionChoice[j].d + "</h4>");
    }
});

// TIMER
    var number = 60;

    var intervalId;

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {
        stop();
        
        function stop() {

            //  Clears our intervalId
            clearInterval(intervalId);
          }
        //  Alert the user that time is up.
        $("#timer").html('<h1>' + "Time Up!" + '</h1>' +
        '<h1>' + 'Score: ' + correctCount 
        + ' out of ' + count +'<h1>')
     
    }
    }


// VARIABLES WITH QUESTIONS AND BOOLEAN TO MAKE TRUE/FALSE
var carQuestions = [ {
         id: 1,
         question: "What are the three main ingredients to make a petrol engine run?",
         choices: {
            a: "Fuel, oil, spark",
            b: "Cooliant, radiator fluid, water",
            c: "Fuel, air, water",
            d: "Fuel, air, spark"
        }
    },
    {
        id: 2,
        question: "What appendage to the engine charges the battery?",
        choices: {
            a: "Starter Motor",
            b: "Alternator",
            c: "Power steering pump",
            d: "Airconditioning compressor"
        }
    },
    {
        id: 3,
        question: "What car is NOT manufactured by Ford Motor Company",
        choices: {
            a: "Mustang",
            b: "Bronco",
            c: "Edsel",
            d: "Grand Prix"
        }
    },
    {
         id: 4,
         question: "Name the component of an engine that opens and closes the valves on the overhead valve engine?",
         choices: {
            a: "Exhause",
            b: "Crankshaft",
            c: "Camshaft",
            d: "Piston"
        }
    },
    {
        id: 5,
        question: "What engine component allow leftover gasses escape the engine?",
        choices: {
            a: "Rotory Splint",
            b: "Exhaust",
            c: "Power steering pump",
            d: "Airconditioning compressor"
        }
    },
    {
        id: 6,
        question: "Acronym given to engines that have dual camshafts located at top of engine",
        choices: {
            a: "SOCH",
            b: "SOHC",
            c: "DOHC",
            d: "DODS"
        }
    },
    {
         id: 7,
         question: "Component that allows signals to travel from different sensors thoughout the engine to the computer",
         choices: {
            a: "Relays",
            b: "Flux Capacity",
            c: "Fuse box",
            d: "Wiring harness"
        }
    },
    {
        id: 8,
        question: "This automotive leader was not involved in designing Chevrolet Vega but gained credit largely due to recently becoming General Manager of Chevrolet devision at GM?",
        choices: {
            a: "John DeLorean",
            b: "Lee Iacocca",
            c: "Henry Ford II",
            d: "Batman"
        }
    },
    {
        id: 9,
        question: "what engine is not a Ford block?",
        choices: {
            a: "429 Shotgun",
            b: "350",
            c: "460 Big Block",
            d: "2.3"
        }
    },
    {
        id: 10,
        question: "What engine block is a Chevrolet engine?",
        choices: {
            a: "Hemi",
            b: "V Wedge",
            c: "454 Big Block",
            d: "6.2 SRT"
        }
    } ]
  
// GET ON CLICK EVENT AND MAP TO VARIALBLE
// HERE WE ARE CREATING VARIABLE WITH THE CONTENT OF THE carQuestions obj

var questionID = carQuestions.map(function(questionNum) {return questionNum.id;});
var questionDeclared = carQuestions.map(function(multChoice) {return multChoice.question;});
var questionChoice = carQuestions.map(function(multChoice) {return multChoice.choices;});
var j = Math.floor(Math.random() * carQuestions.length);

    // $(".question-number").html("<h4>" + questionID[j] + "</h4>");
    $(".question-asked").html("<h4>" + questionDeclared[j] + "<h4>");
    $(".text-a").html("<h4>" + questionChoice[j].a + "</h4>");
    $(".text-b").html("<h4>" + questionChoice[j].b + "</h4>");
    $(".text-c").html("<h4>" + questionChoice[j].c + "</h4>");
    $(".text-d").html("<h4>" + questionChoice[j].d + "</h4>");


// LOGIC
// UPON MATCH OR NOT MATCH
// SAVE SCORE "correctCounter" // "wrongCounter"
// DISPLAY COUNTER AT THE BOTTOM OF THE PAGE

var carKey = [{
        id: 1,
        answer: "choice-a",
        value: "fuel, oil, spark"
         },
        {
        id: 2,
        answer: "choice-b",
        value: "Alternator"
        },
        {
        id: 3,
        answer: "choice-d",
        value: "Grand Prix"
        },
        {
        id: 4,
        answer: "choice-c",
        value: "Camshaft"
        },
        {
        id: 5,
        answer: "choice-b",
        value: "exhaust"
        },
        {
        id: 6,
        answer: "choice-c",
        value: "DOHC"
        },
        {
        id: 7,
        answer: "choice-d",
        value: "Wiring harness"
        }, 
        {
        id: 8,
        answer: "choice-a",
        value: "John DeLorean"
        },
        {
        id: 9,
        answer: "choice-b",
        value: "350"
        },
        {
        id: 10,
        answer: "choice-c",
        value: "454 Big Block"
    } ]
// Turn carKey.id into array that can be used in if statement
var keyIdArr = carKey.map(function(answerID) {return answerID.id;});
var keyAnswerArr = carKey.map(function(answerClick) {return answerClick.answer;});

// CHECK FOR MATCH OR NON MATCH AND CHANGE BUTTON TO GREEN OR RED
function compareAnswer() {
    // We are using "j" // It was created for above for mapping varibles
    if (questionID[j] == keyIdArr[j]) {

        if (keyAnswerArr[j] == userClick) {
            count++;
            correctCount++;
            if (count > 6) {
                gameReset();
            } else {

            }
            console.log("Total count", count);
            console.log("Correct count", correctCount);
            console.log("Wrong count", wrongCount);
            console.log("question id", questionID[j]);
            console.log("key id", keyIdArr[j]);
            console.log("answer", keyAnswerArr[j]);
            console.log("user", userClick);
        } else {
            count++;
            wrongCount++;
            if (count > 6) {
                gameReset();
            } else {

            console.log("Total count", count);
            console.log("Correct count", correctCount);
            console.log("Wrong count", wrongCount);
            console.log("something went wrong");
            console.log("questionID[j]", questionID[j]);
            console.log("answerIdArr[j]", keyIdArr[j]);
            console.log("answerClickArr[j]", keyAnswerArr[j]);
            console.log("userClick", userClick);
            }
        } 
    }
};
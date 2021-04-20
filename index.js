
const myQuestions = [
  {
    question: 'What percent of our trash ends up in the ocean?',
    answers: {
        a: '5%', 
        b: '10%',
        c: '15%'
    },
    correctAnswer: 'b'
  },
  {
    question: "How many species went extinct in the year 2020?",
    answers: {
      a: "5 species",
      b: "10 species",
      c: "15 species"
    },
    correctAnswer: "c"
  },
  {
    question: "How many pieces of plastic are found in the ocean?",
    answers: {
      a: "4.75 trillion",
      b: "2.50 million",
      c: "9.25 billion",
      d: "5.25 trillion"
    },
    correctAnswer: "d"
  }, 
  {
    question: "Greenland lost an average of how many tons of ice per year?",
    answers: {
      a: "279 billion",
      b: "315 billion",
      c: "912 million",
      d: "578 million"
    },
    correctAnswer: "a"
  }
];





function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}



function showResults(){
 // gather answer containers from our quiz
 const answerContainers = quizContainer.querySelectorAll('.answers');

 // keep track of user's answers
 let numCorrect = 0;

 // for each question...
 myQuestions.forEach( (currentQuestion, questionNumber) => {

   // find selected answer
   const answerContainer = answerContainers[questionNumber];
   const selector = `input[name=question${questionNumber}]:checked`;
   const userAnswer = (answerContainer.querySelector(selector) || {}).value;

   // if answer is correct
   if(userAnswer === currentQuestion.correctAnswer){
     // add to the number of correct answers
     numCorrect++;

     // color the answers green
     answerContainers[questionNumber].style.color = 'lightgreen';
   }
   // if answer is wrong or blank
   else{
     // color the answers red
     answerContainers[questionNumber].style.color = 'red';
   }
 });

 // show number of correct answers out of total
 resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}




const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


buildQuiz();


submitButton.addEventListener('click', showResults)










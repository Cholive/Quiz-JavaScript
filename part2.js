"use strict";
// var xhr = new XMLHttpRequest();
// var c;

// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//      c = JSON.parse(xhr.responseText);      
//     }
//   };
//   xhr.open("GET", "finalQuiz.json", true);
//   xhr.send();	



var pos = 0, quiz, test_question, question, choice, choices, chA, chB, chC, chD, correct = 0;
const questions = [
    [myQuestions[0].qTitle, myQuestions[0].answerChoices[0].title, myQuestions[0].answerChoices[1].title, myQuestions[0].answerChoices[2].title, myQuestions[0].answerChoices[3].title,"B"],
    [myQuestions[1].qTitle, myQuestions[1].answerChoices[0].title, myQuestions[1].answerChoices[1].title, myQuestions[1].answerChoices[2].title, myQuestions[1].answerChoices[3].title,"A"],
    [myQuestions[2].qTitle, myQuestions[2].answerChoices[0].title, myQuestions[2].answerChoices[1].title, myQuestions[2].answerChoices[2].title, myQuestions[2].answerChoices[3].title,"D"],
    [myQuestions[3].qTitle, myQuestions[3].answerChoices[0].title, myQuestions[3].answerChoices[1].title, myQuestions[3].answerChoices[2].title, myQuestions[3].answerChoices[3].title,"A"],
    [myQuestions[4].qTitle, myQuestions[4].answerChoices[0].title, myQuestions[4].answerChoices[1].title, myQuestions[4].answerChoices[2].title, myQuestions[4].answerChoices[3].title,"C"]

];
function _(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    quiz = _("quiz");
    if(pos >= questions.length){
        quiz.innerHTML = "<h2>You got "+correct+" out of "+questions.length+" questions correct!</h2>";
        _("test_question").innerHTML = "Quiz Grade";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_question").innerHTML = "Question "+(pos+1)+" of " +questions.length;
    question = questions[pos][0];
    chA = questions [pos][1];
    chB = questions [pos][2];
    chC = questions [pos][3];
    chD = questions [pos][4];
    quiz.innerHTML = "<h3>"+question+"</h3>";
    quiz.innerHTML += "<input type = 'radio' name = 'choices' value = 'A'> "+chA+"<br>";
    quiz.innerHTML += "<input type = 'radio' name = 'choices' value = 'B'> "+chB+"<br>";
    quiz.innerHTML += "<input type = 'radio' name = 'choices' value = 'C'> "+chC+"<br>";
    quiz.innerHTML += "<input type = 'radio' name = 'choices' value = 'D'> "+chD+"<br><br>";
    quiz.innerHTML += "<button onclick='checkAnswer()'> Submit Answer</button>";
}
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][5]) {
        correct++;
    }
    pos++;
    renderQuestion();

}
window.addEventListener("load", renderQuestion, false);


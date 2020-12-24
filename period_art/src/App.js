import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  const questions = {
    1: {
      questionText: "Is there a subject? Can you see something you recognize?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    2: {
      questionText: "Check the title, are you sure there is no subject?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    11: {
      questionText: "Are people wearing togas? (Roman Robes or capes), if they ate nudes, do their look like the kind you might see in a church?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    111: {
      questionText: "Are their poses relaxed or very dramatic",
      answerOptions: [
        {answerText: "Relaxed", isYes: true},
        {answerText: "Dramatic", isYes: false},
      ],
    },
    12: {
      questionText: "Is there anything impossible, magical, or dream-like happening?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    13: {
      questionText: "Is there a strong sens of emotion in the art and do the colors, shapes or textures help make that stronger? Or does it have a very unusual use of shape or form?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    131: {
      questionText: "Do you see obvious geometric shapes or shattered images?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    14: {
      questionText: "Does it include images from pop culture or regular common things with bold color that wouldn't normally be considered art?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    141: {
      questionText: "Did it take effort to make",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    15: {
      questionText: "Does it show very rich or royal people playing or being naughty? Do even the trees and clothes look rich and fluffy?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    16: {
      questionText: "Is the background very dark, but you see dramatic spot-lighting? Is it old fashioned with clothing of the 1600s like from Pirates of the Caribbean?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    17: {
      questionText: "Is the paint thick and obvious? Could it be painted from observation?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    18: {
      questionText: "Do you see hunting, hiking or farming? People formally interacting with nature",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    181: {
      questionText: "Are there slaves",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    19: {
      questionText: "Is it dramatic, like fight or death scene?",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
    191: {
      questionText: "Does it show a battle or a great storm",
      answerOptions: [
        {answerText: "Yes", isYes: true},
        {answerText: "No", isYes: false},
      ],
    },
  };
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(" ");
  const handleAnswerClick = (isYes) => {
    if(isYes) {
      setCurrentQuestionId(currentQuestionId*10+1);
    }
    if(!isYes){
      setCurrentQuestionId(currentQuestionId+1);
    }
    if (currentQuestionId === 21) {setResult("Abstract expressionism"); setShowResult(true);}
    if (currentQuestionId === 1111) {setResult("Renaissance"); setShowResult(true);}
    if (currentQuestionId === 112) {setResult("Neoclassical"); setShowResult(true);}
    if (currentQuestionId === 121) {setResult("Surrealism"); setShowResult(true);}
    if (currentQuestionId === 1311) {setResult("Cubism"); setShowResult(true);}
    if (currentQuestionId === 132) {setResult("Expressionism"); setShowResult(true);}
    if (currentQuestionId === 1411) {setResult("Pop art"); setShowResult(true);}
    if (currentQuestionId === 142) {setResult("Dada"); setShowResult(true);}
    if (currentQuestionId === 151) {setResult("Rococo"); setShowResult(true);}
    if (currentQuestionId === 161) {setResult("Baroque"); setShowResult(true);}
    if (currentQuestionId === 171) {setResult("Impressionism"); setShowResult(true);}
    if (currentQuestionId === 1811) {setResult("Realism"); setShowResult(true);}
    if (currentQuestionId === 182) {setResult("Romanticism"); setShowResult(true);}
    if (currentQuestionId === 1911) {setResult("Romanticism"); setShowResult(true);}
    if (currentQuestionId === 192) {setResult("Baroque"); setShowResult(true);}
    if (currentQuestionId === 20 || currentQuestionId===3){
      setCurrentQuestionId(1);
      setResult("");
    }



  };

  return (
    <div>
      {showResult ? (
          <div>
            The courant of art: {result}
          </div>
      ) : (
          <div>
            {questions[currentQuestionId].questionText}
            {questions[currentQuestionId].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerClick(answerOption.isYes)}>{answerOption.answerText}</button>
          ))}
          </div>
      )}
    </div>
  );
}

export default App;

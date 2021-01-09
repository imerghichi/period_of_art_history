import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  const questions = {
    1: {
      questionText: "Is there a subject? \n Can you see something you recognize?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    2: {
      questionText: "Check the title,\n are you sure there is no subject?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    11: {
      questionText: "Are people wearing togas? (Roman Robes or capes),\n if they ate nudes, do their look like the kind you might see in a church?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    111: {
      questionText: "Are their poses relaxed or very dramatic",
      answerOptions: [
        {answerText: "Relaxed", isYes: 1},
        {answerText: "Dramatic", isYes: 0},
      ],
    },
    12: {
      questionText: "Is there anything impossible, magical, or dream-like happening?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    13: {
      questionText: "Is there a strong sens of emotion in the art and do the colors,\n shapes or textures help make that stronger? Or does it have a very unusual use of shape or form?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    131: {
      questionText: "Do you see obvious geometric shapes or shattered images?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    14: {
      questionText: "Does it include images from pop culture or regular common things with bold\n color that wouldn't normally be considered art?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    141: {
      questionText: "Did it take effort to make",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    15: {
      questionText: "Does it show very rich or royal people playing or being naughty?\n Do even the trees and clothes look rich and fluffy?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    16: {
      questionText: "Is the background very dark, but you see dramatic spot-lighting?\n Is it old fashioned with clothing of the 1600s like from Pirates of the Caribbean?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    17: {
      questionText: "Is the paint thick and obvious?\n Could it be painted from observation?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    18: {
      questionText: "Do you see hunting, hiking or farming?\n People formally interacting with nature",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    181: {
      questionText: "Are there any slaves?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    19: {
      questionText: "Is it dramatic, like fight or death scene?",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    191: {
      questionText: "Does it show a battle or a great storm",
      answerOptions: [
        {answerText: "Yes", isYes: 1},
        {answerText: "No", isYes: 0},
      ],
    },
    21: {
      questionText: "It's abstract Expressionism",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }
      ],
    },
    1111: {
      questionText: "It's Renaissance",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }
      ],
    },
    112: {
      questionText: "It's Neoclassical",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    121: {
      questionText: "It's  Surrealism",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    1311: {
      questionText: "It's  Cubism",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    132: {
      questionText: "It's  Expressionism",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    1411: {
      questionText: "It's  Pop art",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    142: {
      questionText: "It's  Dada",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    151: {
      questionText: "It's Rococo ",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    161: {
      questionText: "It's Baroque ",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    171: {
      questionText: "It's Impressionism ",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    1811: {
      questionText: "It's Realism ",
      answerOptions: [],
    },
    182: {
      questionText: "It's Romanticism ",
      answerOptions: [],
    },
    1911: {
      questionText: "It's Romanticism ",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    192: {
      questionText: "It's Baroque",
      answerOptions: [
        {answerText: "PLAY AGAIN", isYes:3 }

      ],
    },
    20: {
      questionText: "You miss something, start over! ",
      answerOptions: [
        {answerText: "Start over", isYes:3 }

      ],
    },
    3: {
      questionText: "You miss something, start over! ",
      answerOptions: [
        {answerText: "Start over", isYes:3 }

      ],
    },
  };
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const handleAnswerClick = (isYes) => {
    if(isYes === 1) {
      setCurrentQuestionId(currentQuestionId*10+1);
    }
    if(isYes === 0){
      setCurrentQuestionId(currentQuestionId+1);
    }
    if(isYes === 3){
      setCurrentQuestionId(1);
    }

  };

  return (
      <div>
      <div className='app'>
        <div className='section'>
          {questions[currentQuestionId].questionText}

          {questions[currentQuestionId].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerClick(answerOption.isYes)}>{answerOption.answerText}</button>
          ))}
        </div>
      </div>
        <footer>
          <p>Made with &hearts; by <a href="https://github.com/imerghichi" target="_blank" rel="noopener noreferrer">Imane</a>
          </p>
        </footer>
      </div>
        );
}

export default App;

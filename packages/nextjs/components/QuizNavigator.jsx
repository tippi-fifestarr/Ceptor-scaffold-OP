import React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  CharacterPage,
  EnvironmentForRace,
  JobForClass,
  MajorForBackground,
  Name,
  SimpleOrComplex,
} from "./QuizComponents/QuizExports";

const State = {
  QUESTION0: "question0",
  QUESTION1: "question1",
  QUESTION2: "question2",
  QUESTION3: "question3",
  QUESTION4: "question4",
  QUESTION5: "question5",
};

const initialState = State.QUESTION0;

export default function QuizNavigator({}) {
  const [currentState, setCurrentState] = useState(initialState);
  const [myEnvironment, setMyEnvironment] = useState("");
  const [myJob, setMyJob] = useState("");
  const [myMajor, setMyMajor] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [isSimpleQuiz, setIsSimpleQuiz] = useState(true);
  const [progress, setProgress] = useState(0);
  const [character, setCharacter] = useState({});

  const questionComponentMap = {
    [State.QUESTION0]: <SimpleOrComplex isSimpleQuiz={isSimpleQuiz} setIsSimpleQuiz={setIsSimpleQuiz} />,
    [State.QUESTION1]: <EnvironmentForRace myEnvironment={myEnvironment} setMyEnvironment={setMyEnvironment} />,
    [State.QUESTION2]: <JobForClass myJob={myJob} setMyJob={setMyJob} />,
    [State.QUESTION3]: <MajorForBackground myMajor={myMajor} setMyMajor={setMyMajor} />,
    [State.QUESTION4]: (
      <Name
        characterName={characterName}
        setCharacterName={setCharacterName}
        myJob={myJob || "Fighter"}
        myEnvironment={myEnvironment || "Human"}
      />
    ),
    [State.QUESTION5]: (
      <CharacterPage
        myEnvironment={myEnvironment}
        myJob={myJob}
        myMajor={myMajor || "Folk Hero"}
        characterName={characterName}
        character={character}
        setCharacter={setCharacter}
      />
    ),
  };

  function next() {
    switch (currentState) {
      case State.QUESTION0:
        isSimpleQuiz ? setCurrentState(State.QUESTION1) : setCurrentState(State.QUESTION0);
        break;
      case State.QUESTION1:
        setCurrentState(State.QUESTION2);
        setProgress(25);
        break;
      case State.QUESTION2:
        setCurrentState(State.QUESTION3);
        setProgress(50);
        break;
      case State.QUESTION3:
        setCurrentState(State.QUESTION4);
        setProgress(75);
        break;
      case State.QUESTION4:
        setCurrentState(State.QUESTION5);
        setProgress(100);
        break;
      default:
        break;
    }
  }

  function back() {
    switch (currentState) {
      case State.START:
        break;
      case State.QUESTION1:
        setCurrentState(State.START);
        break;
      case State.QUESTION2:
        setCurrentState(State.QUESTION1);
        setProgress(0);
        break;
      case State.QUESTION3:
        setCurrentState(State.QUESTION2);
        setProgress(25);
        break;
      case State.QUESTION4:
        setCurrentState(State.QUESTION3);
        setProgress(50);
        break;
      case State.QUESTION5:
        setCurrentState(State.QUESTION4);
        setProgress(75);
        break;
      default:
        break;
    }
  }

  function save() {
    console.log(character);
  }

  return (
    <div
      style={{
        position: "relative", // Set position to relative
        width: "100%", // Ensure the container covers the entire viewport
        height: "100%", // Ensure the container covers the entire viewport
      }}
    >
      <Image
        src="/QuizCellBackground.png"
        width={1000}
        height={1000}
        alt="midPage"
        className="object-auto w-full h-full"
        style={{
          position: "absolute", // Set position to absolute
          top: 0, // Align to the top of the container
          left: 0, // Align to the left of the container
          zIndex: -10, // Set a lower z-index so that the content appears on top
        }}
      />
      <div className="mx-32 mt-16 p-8 max-w-500 relative">
        <h1 className="text-center text-4xl leading-8 mb-4">Ceptor Club Character</h1>
        <h1 className="text-center text-4xl leading-8 mb-4">Generator</h1>

        <div className="pb-4 relative">
          <div className="w-full bg-gray-300 h-4 rounded-full">
            <div className="h-4 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="text-center mt-2">{`${progress}% Completed`}</div>
        </div>

        <div className="pb-16">{questionComponentMap[currentState]}</div>

        <div className="fixed bottom-28 right-28">
          {currentState !== State.QUESTION1 && currentState !== State.QUESTION0 ? (
            <button
              className="btn bg-black border-0 px-4 py-2 rounded-md text-center text-base mr-2"
              id="back-button"
              onClick={back}
            >
              {currentState === State.QUESTION5 ? "Explore other options?" : "Back"}
            </button>
          ) : null}
          {currentState !== State.GENERATE_CHARACTER &&
          currentState !== State.QUESTION5 &&
          currentState !== State.QUESTION0 ? (
            <button
              className="btn bg-black border-0 px-4 py-2 rounded-md text-center text-base"
              id="next-button"
              onClick={next}
            >
              {currentState !== State.QUESTION4 ? "Next" : "Finalize Character!"}
            </button>
          ) : null}

          {currentState === State.QUESTION0 ? (
            <button
              className="btn bg-black border-0 px-4 py-2 rounded-md text-center text-base mr-2"
              id="simple-button"
              onClick={next}
            >
              Start Quiz
            </button>
          ) : null}
          {currentState === State.QUESTION5 ? (
            <button
              className="btn bg-black border-0 px-4 py-2 rounded-md text-center text-base mr-2"
              id="save-character"
              onClick={() => save(character)}
            >
              Save Character to Wallet!
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

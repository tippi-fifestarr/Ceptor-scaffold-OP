import React from "react";
import { useState } from "react";
import CharacterPage from "./QuizComponents/CharacterPage";
import EnvironmentForRace from "./QuizComponents/EnvironmentForRace";
import JobForClass from "./QuizComponents/JobForClass";
import MajorForBackground from "./QuizComponents/MajorForBackground";
import Name from "./QuizComponents/Name";

const State = {
  QUESTION0: "question0",
  QUESTION1: "question1",
  QUESTION2: "question2",
  QUESTION3: "question3",
  QUESTION4: "question4",
  QUESTION5: "question5",
  QUESTION6: "question6",
  QUESTION7: "question7",
  QUESTION8: "question8",
  QUESTION9: "question9",
  GENERATE_CHARACTER: "generateCharacter",
  CHARACTER_PAGE: "characterPage",
};

const initialState = State.QUESTION1;

export default function QuizNavigator({}) {
  const [currentState, setCurrentState] = useState(initialState);
  const [myEnvironment, setMyEnvironment] = useState("");
  const [myJob, setMyJob] = useState("");
  const [myMajor, setMyMajor] = useState("");
  const [characterName, setCharacterName] = useState("");

  const questionComponentMap = {
    [State.Question0]: "hello",
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
      />
    ),
  };

  function next() {
    // if (charName === "") {
    //   setCharName(RandomName());

    switch (currentState) {
      case State.QUESTION1:
        setCurrentState(State.QUESTION2);
        break;
      case State.QUESTION2:
        setCurrentState(State.QUESTION3);
        break;
      case State.QUESTION3:
        setCurrentState(State.QUESTION4);
        break;
      case State.QUESTION4:
        setCurrentState(State.QUESTION5);
        break;
      case State.QUESTION5:
        setCurrentState(State.QUESTION6);
        break;
      case State.QUESTION6:
        setCurrentState(State.QUESTION7);
        break;
      case State.QUESTION7:
        setCurrentState(State.QUESTION8);
        break;
      case State.QUESTION8:
        setCurrentState(State.QUESTION9);
        break;
      case State.QUESTION9:
        setCurrentState(State.GENERATE_CHARACTER);
        break;
      case State.GENERATE_CHARACTER:
        setCurrentState(State.CHARACTER_PAGE);
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
        break;
      case State.QUESTION3:
        setCurrentState(State.QUESTION2);
        break;
      case State.QUESTION4:
        setCurrentState(State.QUESTION3);
        break;
      case State.QUESTION5:
        setCurrentState(State.QUESTION4);
        break;
      case State.QUESTION6:
        setCurrentState(State.QUESTION5);
        break;
      case State.QUESTION7:
        setCurrentState(State.QUESTION6);
        break;
      case State.QUESTION8:
        setCurrentState(State.QUESTION7);
        break;
      case State.QUESTION9:
        setCurrentState(State.QUESTION8);
        break;
      case State.GENERATE_CHARACTER:
        setCurrentState(State.QUESTION9);
        break;
      default:
        break;
    }
  }

  return (
    <div className="mx-32 p-8 max-w-500 relative">
      <h1 className="text-center text-4xl leading-8 mb-4">Ceptor Club Character</h1>
      <h1 className="text-center text-4xl leading-8 mb-4">Generator</h1>
      {/* {currentState !== State.QUESTION1 ? (
        <h2 id="character-name" className="text-center text-2xl leading-8 m-8">
        {charName}
        </h2>
      ) : null} */}

      <div className="pb-16">{questionComponentMap[currentState]}</div>

      <div className="fixed bottom-28 right-28">
        {currentState !== State.QUESTION1 && currentState !== State.CHARACTER_PAGE ? (
          <button
            className="btn bg-black border-0 px-4 py-2 rounded-md text-center text-base mr-2"
            id="back-button"
            onClick={back}
          >
            Back
          </button>
        ) : null}
        {currentState !== State.GENERATE_CHARACTER && currentState !== State.CHARACTER_PAGE ? (
          <button
            className="btn bg-black border-0 px-4 py-2 rounded-md text-center text-base"
            id="next-button"
            onClick={next}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}

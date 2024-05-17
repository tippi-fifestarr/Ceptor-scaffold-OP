import React, { useState } from "react";

const elfFirstNames = ["Aeliana", "Eldrin", "Finian", "Kael", "Lyria", "Thalor", "Hooty"];
const elfSurnames = ["Moonshadow", "Silverbough", "Stargazer", "Windrunner", "Dooty"];

const dwarfFirstNames = ["Borin", "Brynja", "Dain", "Gorin", "Kara", "Thrain", "Hooty"];
const dwarfSurnames = ["Battleaxe", "Goldbeard", "Ironhammer", "Stoneforge", "Dooty"];

const humanFirstNames = ["Alistair", "Donovan", "Elara", "Quinn", "Rowan", "Seraphina", "Hooty"];
const humanSurnames = ["Firebrand", "Ironheart", "Stormcaller", "Whitewood", "Dooty"];

const halflingFirstNames = ["Bilbo", "Daisy", "Felicity", "Milo", "Pip", "Rosie", "Hooty"];
const halflingSurnames = ["Goodbarrel", "Greenbottle", "Took", "Underhill", "Dooty"];

const fighterDescriptors = ["Brave", "Fearless", "Resilient", "Tenacious", "Ceptorific"];
const mageDescriptors = ["Arcane", "Enigmatic", "Scholarly", "Wise", "Ceptorific"];
const clericDescriptors = ["Compassionate", "Devout", "Pious", "Righteous", "Ceptorific"];
const thiefDescriptors = ["Cunning", "Deceptive", "Nimble", "Stealthy", "Ceptorific"];

export default function Name({ myEnvironment, myJob, characterName, setCharacterName }) {
  const [nameObject, setNameObject] = useState({
    firstName: "",
    surname: "",
    descriptor: "",
  });

  function handleNameChange(value, nameType) {
    setNameObject(prevNameObject => ({
      ...prevNameObject,
      [nameType]: value,
    }));
    setCharacterName(prevCharacterName => ({
      ...prevCharacterName,
      [nameType]: value,
    }));
    console.log(characterName);
  }

  return (
    <>
      <div>
        Congratulations! Your character is a {myEnvironment} {myJob}!
      </div>
      <div>Choose from the options below to name your character, or feel free to type in your own name.</div>

      <div>
        {myEnvironment === "Elf"
          ? elfFirstNames.map((firstName, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={firstName}
                    id={`elf-first-name-${index}`}
                    checked={nameObject.firstName === firstName}
                    onChange={() => handleNameChange(firstName, "firstName")}
                    className="hidden"
                  />
                  <label
                    htmlFor={`elf-first-name-${index}`}
                    className={`cursor-pointer p-2 rounded-md ${
                      nameObject.firstName === firstName ? "border-4 border-solid border-ceptor p-2" : ""
                    }`}
                  >
                    {firstName}
                  </label>
                </div>
              </div>
            ))
          : null}
      </div>

      <div>
        {myEnvironment === "Elf"
          ? elfSurnames.map((surname, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={surname}
                    id={`elf-surname-${index}`}
                    checked={nameObject.surname === surname}
                    onChange={() => handleNameChange(surname, "surname")}
                    className="hidden"
                  />
                  <label
                    htmlFor={`elf-surname-${index}`}
                    className={`cursor-pointer p-2 rounded-md ${
                      nameObject.surname === surname ? "border-4 border-solid border-ceptor p-2" : ""
                    }`}
                  >
                    {surname}
                  </label>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

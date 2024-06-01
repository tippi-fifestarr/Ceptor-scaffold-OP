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
  console.log(characterName)
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

      <div className="grid grid-cols-3 gap-8 mt-2 text-xl">
        <div className="mb-4">First Name</div>
        <div className="mb-4">Surname</div>
        <div className="mb-4">Descriptor</div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-2 text-xl">
        <div>
          {myEnvironment === "Elf" &&
            elfFirstNames.map((firstName, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={firstName}
                    id={`elf-first-name-${index}`}
                    checked={nameObject.firstName === firstName}
                    onChange={() => handleNameChange(firstName, "firstName")}
                  />
                  <label htmlFor={`elf-first-name-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {firstName}
                  </label>
                </div>
              </div>
            ))}
          {myEnvironment === "Dwarf" &&
            dwarfFirstNames.map((firstName, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={firstName}
                    id={`dwarf-first-name-${index}`}
                    checked={nameObject.firstName === firstName}
                    onChange={() => handleNameChange(firstName, "firstName")}
                  />
                  <label htmlFor={`dwarf-first-name-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {firstName}
                  </label>
                </div>
              </div>
            ))}
          {myEnvironment === "Human" &&
            humanFirstNames.map((firstName, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={firstName}
                    id={`human-first-name-${index}`}
                    checked={nameObject.firstName === firstName}
                    onChange={() => handleNameChange(firstName, "firstName")}
                  />
                  <label htmlFor={`human-first-name-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {firstName}
                  </label>
                </div>
              </div>
            ))}
          {myEnvironment === "Halfling" &&
            halflingFirstNames.map((firstName, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={firstName}
                    id={`halfling-first-name-${index}`}
                    checked={nameObject.firstName === firstName}
                    onChange={() => handleNameChange(firstName, "firstName")}
                  />
                  <label htmlFor={`halfling-first-name-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {firstName}
                  </label>
                </div>
              </div>
            ))}
          <div>
            <input
              type="text"
              onChange={e => handleNameChange(e.target.value, "firstName")}
              className="w-3/4"
              title="Enter custom first name"
            />
          </div>
        </div>

        <div>
          {myEnvironment === "Elf" &&
            elfSurnames.map((surname, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={surname}
                    id={`elf-surname-${index}`}
                    checked={nameObject.surname === surname}
                    onChange={() => handleNameChange(surname, "surname")}
                  />
                  <label htmlFor={`elf-surname-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {surname}
                  </label>
                </div>
              </div>
            ))}
          {myEnvironment === "Dwarf" &&
            dwarfSurnames.map((surname, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={surname}
                    id={`dwarf-surname-${index}`}
                    checked={nameObject.surname === surname}
                    onChange={() => handleNameChange(surname, "surname")}
                  />
                  <label htmlFor={`dwarf-surname-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {surname}
                  </label>
                </div>
              </div>
            ))}
          {myEnvironment === "Human" &&
            humanSurnames.map((surname, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={surname}
                    id={`human-surname-${index}`}
                    checked={nameObject.surname === surname}
                    onChange={() => handleNameChange(surname, "surname")}
                  />
                  <label htmlFor={`human-surname-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {surname}
                  </label>
                </div>
              </div>
            ))}
          {myEnvironment === "Halfling" &&
            halflingSurnames.map((surname, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={surname}
                    id={`halfling-surname-${index}`}
                    checked={nameObject.surname === surname}
                    onChange={() => handleNameChange(surname, "surname")}
                  />
                  <label htmlFor={`halfling-surname-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {surname}
                  </label>
                </div>
              </div>
            ))}
          <div>
            <input
              type="text"
              onChange={e => handleNameChange(e.target.value, "surname")}
              className="w-3/4"
              title="Enter custom surname"
            />
          </div>
        </div>

        <div>
          {myJob === "Fighter" &&
            fighterDescriptors.map((descriptor, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={descriptor}
                    id={`fighter-descriptor-${index}`}
                    checked={nameObject.descriptor === descriptor}
                    onChange={() => handleNameChange(descriptor, "descriptor")}
                  />
                  <label htmlFor={`fighter-descriptor-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {descriptor}
                  </label>
                </div>
              </div>
            ))}
          {myJob === "Mage" &&
            mageDescriptors.map((descriptor, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={descriptor}
                    id={`mage-descriptor-${index}`}
                    checked={nameObject.descriptor === descriptor}
                    onChange={() => handleNameChange(descriptor, "descriptor")}
                  />
                  <label htmlFor={`mage-descriptor-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {descriptor}
                  </label>
                </div>
              </div>
            ))}
          {myJob === "Cleric" &&
            clericDescriptors.map((descriptor, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={descriptor}
                    id={`cleric-descriptor-${index}`}
                    checked={nameObject.descriptor === descriptor}
                    onChange={() => handleNameChange(descriptor, "descriptor")}
                  />
                  <label htmlFor={`cleric-descriptor-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {descriptor}
                  </label>
                </div>
              </div>
            ))}
          {myJob === "Thief" &&
            thiefDescriptors.map((descriptor, index) => (
              <div key={index}>
                <div>
                  <input
                    type="radio"
                    value={descriptor}
                    id={`thief-descriptor-${index}`}
                    checked={nameObject.descriptor === descriptor}
                    onChange={() => handleNameChange(descriptor, "descriptor")}
                  />
                  <label htmlFor={`thief-descriptor-${index}`} className={`cursor-pointer p-2 rounded-md`}>
                    {descriptor}
                  </label>
                </div>
              </div>
            ))}
          <div>
            <input
              type="text"
              onChange={e => handleNameChange(e.target.value, "descriptor")}
              className="w-3/4"
              title="Enter custom descriptor"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 text-xl">
        Your character is called {nameObject.firstName} {nameObject.surname} the {nameObject.descriptor}!
      </div>
    </>
  );
}

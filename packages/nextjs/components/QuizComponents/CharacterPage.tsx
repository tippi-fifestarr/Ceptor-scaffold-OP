import { useEffect } from "react";
import { Character, defaultCleric, defaultFighter, defaultMage, defaultThief } from "../ceptor/CharacterData";

// Define the prop types
interface CharacterName {
  firstName: string;
  surname: string;
  descriptor: string;
}

interface CharacterPageProps {
  myJob: "Cleric" | "Fighter" | "Mage" | "Thief";
  myEnvironment: "Elf" | "Dwarf" | "Halfling" | "Human";
  myMajor: string;
  characterName: CharacterName;
  character: any;
  setCharacter: (character: any) => void;
}

// Define the component with the props type
export default function CharacterPage({
  myJob,
  myEnvironment,
  myMajor,
  characterName,
  character,
  setCharacter,
}: CharacterPageProps) {
  useEffect(() => {
    console.log("useEffect triggered");

    let newCharacter: Character;

    switch (myJob) {
      case "Cleric":
        newCharacter = { ...defaultCleric };
        break;
      case "Mage":
        newCharacter = { ...defaultMage };
        break;
      case "Thief":
        newCharacter = { ...defaultThief };
        break;
      default:
        newCharacter = { ...defaultFighter };
        break;
    }

    switch (myEnvironment) {
      case "Elf":
        newCharacter = {
          ...newCharacter,
          race: "Wood Elf",
          abilities: {
            ...newCharacter.abilities,
            dexterity: newCharacter.abilities.dexterity + 2,
            wisdom: newCharacter.abilities.wisdom + 1,
          },
        };
        break;
      case "Dwarf":
        newCharacter = {
          ...newCharacter,
          race: "Mountain Dwarf",
          abilities: {
            ...newCharacter.abilities,
            strength: newCharacter.abilities.strength + 2,
            constitution: newCharacter.abilities.constitution + 2,
          },
          combatStats: {
            ...newCharacter.combatStats,
            speed: "25 feet",
          },
        };
        break;
      case "Halfling":
        newCharacter = {
          ...newCharacter,
          race: "Lightfoot Halfling",
          abilities: {
            ...newCharacter.abilities,
            dexterity: newCharacter.abilities.dexterity + 2,
            charisma: newCharacter.abilities.charisma + 1,
          },
          combatStats: {
            ...newCharacter.combatStats,
            speed: "25 feet",
          },
        };
        break;
      default:
        newCharacter = {
          ...newCharacter,
          race: "Human",
          abilities: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            ...Object.fromEntries(Object.entries(newCharacter.abilities).map(([key, value]) => [key, value + 1])),
          },
        };
        break;
    }

    switch (myMajor) {
      case "Acolyte":
        newCharacter = {
          ...newCharacter,
          alignment: "Chaotic Good",
        };
        break;
      case "Criminal":
        newCharacter = {
          ...newCharacter,
          alignment: "Lawful Evil",
        };
        break;
      case "Noble":
        newCharacter = {
          ...newCharacter,
          alignment: "Lawful Good",
        };
        break;
      case "Sage":
        newCharacter = {
          ...newCharacter,
          alignment: "Lawful Neutral",
        };
        break;
      case "Soldier":
        newCharacter = {
          ...newCharacter,
          alignment: "Neutral Evil",
        };
        break;
      case "Outlander":
        newCharacter = {
          ...newCharacter,
          alignment: "Chaotic Neutral",
        };
        break;
      case "Entertainer":
        newCharacter = {
          ...newCharacter,
          alignment: "True Neutral",
        };
        break;
      default:
        newCharacter = {
          ...newCharacter,
          alignment: "Neutral Good",
        };
        break;
    }

    const finalCharacterName = {
      firstName: characterName.firstName || "Hooty",
      surname: characterName.surname || "Dooty",
      descriptor: characterName.descriptor || "Ceptorific",
    };

    newCharacter = {
      ...newCharacter,
      name: `${finalCharacterName.firstName} ${finalCharacterName.surname} the ${finalCharacterName.descriptor}`,
      background: myMajor,
    };

    console.log("Generated new character:", newCharacter);

    if (JSON.stringify(newCharacter) !== JSON.stringify(character)) {
      console.log("Updating character state");
      setCharacter(newCharacter);
    }
  }, [myJob, myEnvironment, myMajor, characterName, character, setCharacter]);

  if (!character || Object.keys(character).length === 0) {
    return <div>Loading character data...</div>;
  }

  return (
    <div className="bg-gray-800 text-white p-5 rounded-lg shadow-md opacity-90">
      <h2 className="text-2xl font-bold">
        {character.name} - Level {character.level} {character.classInfo}
      </h2>
      <p>
        {character.race} | {character.background} | {character.alignment}
      </p>
      <div>
        <h3 className="font-bold">Abilities:</h3>
        {Object.entries(character.abilities).map(([ability, value]) => (
          <p key={ability}>
            {ability}: {value as number}
          </p>
        ))}
      </div>
      <div>
        <h3 className="font-bold">Combat Stats:</h3>
        <p>AC: {character.combatStats.ac}</p>
        <p>Hit Points: {character.combatStats.hitPoints}</p>
        <p>Initiative: {character.combatStats.initiative}</p>
        <p>Speed: {character.combatStats.speed}</p>
      </div>
    </div>
  );
}

import { defaultCleric, defaultFighter, defaultMage, defaultThief } from "../ceptor/CharacterData";

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
}

// Define the component with the props type
export default function CharacterPage({ myJob, myEnvironment, myMajor, characterName }: CharacterPageProps) {
  let character;
  switch (myJob) {
    case "Cleric":
      character = defaultCleric;
      break;
    case "Mage":
      character = defaultMage;
      break;
    case "Thief":
      character = defaultThief;
      break;
    default:
      character = defaultFighter;
      break;
  }

  switch (myEnvironment) {
    case "Elf":
      character = {
        ...character,
        race: "Wood Elf",
        abilities: {
          ...character.abilities,
          dexterity: character.abilities.dexterity + 2,
          wisdom: character.abilities.wisdom + 1,
        },
      };
      break;
    case "Dwarf":
      character = {
        ...character,
        race: "Mountain Dwarf",
        abilities: {
          ...character.abilities,
          strength: character.abilities.strength + 2,
          constitution: character.abilities.constitution + 2,
        },
        combatStats: {
          ...character.combatStats,
          speed: "25 feet",
        },
      };
      break;
    case "Halfling":
      character = {
        ...character,
        race: "Lightfoot Halfling",
        abilities: {
          ...character.abilities,
          dexterity: character.abilities.dexterity + 2,
          charisma: character.abilities.charisma + 1,
        },
        combatStats: {
          ...character.combatStats,
          speed: "25 feet",
        },
      };
      break;
    default:
      character = {
        ...character,
        race: "Human",
        abilities: Object.fromEntries(Object.entries(character.abilities).map(([key, value]) => [key, value + 1])),
      };
      break;
  }

  switch (myMajor) {
    case "Acolyte":
      character = {
        ...character,
        alignment: "Chaotic Good",
      };
      break;
    case "Criminal":
      character = {
        ...character,
        alignment: "Lawful Evil",
      };
      break;
    case "Noble":
      character = {
        ...character,
        alignment: "Lawful Good",
      };
      break;
    case "Sage":
      character = {
        ...character,
        alignment: "Lawful Neutral",
      };
      break;
    case "Soldier":
      character = {
        ...character,
        alignment: "Neutral Evil",
      };
      break;
    case "Outlander":
      character = {
        ...character,
        alignment: "Chaotic Neutral",
      };
      break;
    case "Entertainer":
      character = {
        ...character,
        alignment: "True Neutral",
      };
      break;
    default:
      character = {
        ...character,
        alignment: "Neutral Good",
      };
      break;
  }

  if (!character) {
    return <div>Character Data is not available.</div>;
  }

  if (
    characterName.firstName === undefined ||
    characterName.surname === undefined ||
    characterName.descriptor === undefined
  ) {
    characterName = {
      firstName: characterName.firstName || "Hooty",
      surname: characterName.surname || "Dooty",
      descriptor: characterName.descriptor || "Ceptorific",
    };
  }

  character = {
    ...character,
    name: `${characterName.firstName} ${characterName.surname} the ${characterName.descriptor}`,
    background: myMajor,
  };

  console.log(character);

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
            {ability}: {value}
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

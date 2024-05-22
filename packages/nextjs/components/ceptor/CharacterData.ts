interface Character {
  name: string;
  race: string;
  classInfo: string;
  level: number;
  background: string;
  alignment: string;
  player: string;
  abilities: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  proficiencies: {
    armor: string[];
    weapons: string[];
    tools: string[];
    savingThrows: string[];
    skills: string[];
  };
  featuresTraits: string[];
  equipment: string[];
  combatStats: {
    ac: number;
    initiative: number;
    speed: string;
    hitPoints: number;
  };
}

const characters: Character[] = [
  {
    name: "猪八戒",
    race: "Zhu Bajie",
    classInfo: "Fighter",
    level: 1,
    background: "Folk Hero",
    alignment: "Neutral Good",
    player: "Allan Ma",
    abilities: {
      strength: 15,
      dexterity: 10,
      constitution: 16,
      intelligence: 8,
      wisdom: 13,
      charisma: 12,
    },
    proficiencies: {
      armor: ["All armor", "shields"],
      weapons: ["Simple weapons", "martial weapons"],
      tools: ["Brewer's supplies"],
      savingThrows: ["Strength", "Constitution"],
      skills: ["Athletics", "Perception"],
    },
    featuresTraits: [
      "Pig's Resilience: Resistance to poison damage and advantage on saving throws against poison.",
      "Noble Heart: Proficiency in Insight.",
      "Forager: Can find food and fresh water for himself and up to five others each day in suitable environments.",
      "Fighting Style (Defense): +1 bonus to AC while wearing armor.",
      "Second Wind: Use a bonus action to regain hit points equal to 1d10 + your fighter level once per short or long rest.",
    ],
    equipment: [
      "Guandao (1d12 slashing damage, heavy, two-handed)",
      "Chain mail (AC 16)",
      "Adventurer's pack",
      "Flask of strong liquor",
      "Signet of his celestial origin",
      "Set of common clothes",
    ],
    combatStats: {
      ac: 17,
      initiative: 0,
      speed: "30 feet",
      hitPoints: 13,
    },
  },
];

const defaultFighter: Character = {
  name: "",
  race: "",
  classInfo: "Fighter",
  level: 1,
  background: "",
  alignment: "",
  player: "",
  abilities: {
    strength: 15,
    dexterity: 14,
    constitution: 13,
    intelligence: 8,
    wisdom: 10,
    charisma: 12,
  },
  proficiencies: {
    armor: ["All armor", "Shields"],
    weapons: ["Simple weapons", "Martial weapons"],
    tools: ["Playing cards", "Dice set"],
    savingThrows: ["Strength", "Constitution"],
    skills: ["Athletics", "Intimidation"],
  },
  featuresTraits: ["Fighting Style", "Second Wind"],
  equipment: ["Chain mail", "Longsword", "Shield", "Explorer's pack"],
  combatStats: {
    ac: 16,
    initiative: 2,
    speed: "30 feet",
    hitPoints: 12,
  },
};

const defaultMage: Character = {
  name: "",
  race: "",
  classInfo: "Wizard",
  level: 1,
  background: "",
  alignment: "",
  player: "",
  abilities: {
    strength: 8,
    dexterity: 14,
    constitution: 12,
    intelligence: 15,
    wisdom: 10,
    charisma: 13,
  },
  proficiencies: {
    armor: [],
    weapons: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
    tools: ["None"],
    savingThrows: ["Intelligence", "Wisdom"],
    skills: ["Arcana", "History"],
  },
  featuresTraits: ["Spellcasting", "Arcane Recovery"],
  equipment: ["Quarterstaff", "Component pouch", "Scholar's pack", "Spellbook"],
  combatStats: {
    ac: 12,
    initiative: 2,
    speed: "30 feet",
    hitPoints: 6,
  },
};

const defaultCleric: Character = {
  name: "",
  race: "",
  classInfo: "Cleric",
  level: 1,
  background: "",
  alignment: "",
  player: "",
  abilities: {
    strength: 10,
    dexterity: 12,
    constitution: 13,
    intelligence: 8,
    wisdom: 15,
    charisma: 14,
  },
  proficiencies: {
    armor: ["Light armor", "Medium armor", "Shields"],
    weapons: ["Simple weapons"],
    tools: ["None"],
    savingThrows: ["Wisdom", "Charisma"],
    skills: ["Medicine", "Religion"],
  },
  featuresTraits: ["Spellcasting", "Divine Domain: Life"],
  equipment: ["Mace", "Shield", "Scale mail", "Holy symbol", "Priest's pack"],
  combatStats: {
    ac: 16,
    initiative: 1,
    speed: "30 feet",
    hitPoints: 10,
  },
};

const defaultThief: Character = {
  name: "",
  race: "",
  classInfo: "Thief",
  level: 1,
  background: "",
  alignment: "",
  player: "",
  abilities: {
    strength: 10,
    dexterity: 15,
    constitution: 12,
    intelligence: 13,
    wisdom: 14,
    charisma: 8,
  },
  proficiencies: {
    armor: ["Light armor"],
    weapons: ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
    tools: ["Thieves' tools"],
    savingThrows: ["Dexterity", "Intelligence"],
    skills: ["Acrobatics", "Stealth", "Sleight of Hand", "Perception"],
  },
  featuresTraits: ["Sneak Attack", "Thieves' Cant"],
  equipment: ["Leather armor", "Two daggers", "Thieves' tools", "Burglar's pack"],
  combatStats: {
    ac: 14,
    initiative: 2,
    speed: "30 feet",
    hitPoints: 10,
  },
};

export { defaultFighter, defaultCleric, defaultMage, defaultThief };
export default characters;

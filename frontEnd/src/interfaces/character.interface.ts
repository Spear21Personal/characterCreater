export interface Character {
  name: string;
  race: {
    name: string;
    alignment: string;
    size: string;
    size_description: string;
    age: string;
    speed: number;
    description: string ;
    starting_proficiencies_description: string;
    language_id: number;
    language_id_2: number;
    language_description: string;
    subrace_id: number;
    ability_bonus_id: number;
    ability_bonus_value: number;
  };
  class: {
    name: string;
    hit_die: number;
    subclass_id: number;
    spellcasting_level: number;
    spellcasting_ability_id: number;
  };
  level: number;
  alignment: string;
  abilities: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  hitPoints: number;
  armorClass: number;
  speed: number;
  skills: string[];
  inventory: string[];
}

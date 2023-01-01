import { Component } from '@angular/core';

@Component({
  selector: 'app-charcter-gen',
  templateUrl: './charcter-gen.component.html',
  styleUrls: ['./charcter-gen.component.scss']
})
export class CharcterGenComponent {
  races = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
  classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
  abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

  character = {
    race: '',
    class: '',
    abilities: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    }
  }

  generateCharacter() {
    this.character.race = this.races[Math.floor(Math.random() * this.races.length)];
    this.character.class = this.classes[Math.floor(Math.random() * this.classes.length)];
    this.character.abilities.strength = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.dexterity = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.constitution = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.intelligence = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.wisdom = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.charisma = Math.floor(Math.random() * 20) + 1
  }
}

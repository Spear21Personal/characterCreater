import { Component } from '@angular/core';
import { Character } from 'src/interfaces/character.interface';
import {CharacterService} from '../../../services/character.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-charcter-gen',
  templateUrl: './charcter-gen.component.html',
  styleUrls: ['./charcter-gen.component.scss'],
  animations: [
    trigger('slideInFromTopRight', [
        state('in', style({
            transform: 'translate3d(0, 0, 0)',
            opacity: 1
        })),
        transition(':enter', [
            style({
                transform: 'translate3d(100%, -100%, 0)',
                opacity: 0
            }),
            animate('0.5s ease-in-out')
        ]),
        transition(':leave', [
            animate('0.5s ease-in-out', style({
                transform: 'translate3d(100%, -100%, 0)',
                opacity: 0
            }))
        ])
    ])
]
})
export class CharcterGenComponent {


 character!: Character;
 race:any;
 class:any;


constructor(private characterService: CharacterService){
  this.characterService.currentCharacter.subscribe(data => {
    this.character = data;
    this.race = data.race;
    this.class = data.class;
  });
}
  generateCharacter() {
    // this.character.race = this.races[Math.floor(Math.random() * this.races.length)];
    // this.character.class = this.classes[Math.floor(Math.random() * this.classes.length)];
    this.character.abilities.strength = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.dexterity = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.constitution = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.intelligence = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.wisdom = Math.floor(Math.random() * 20) + 1;
    this.character.abilities.charisma = Math.floor(Math.random() * 20) + 1
  }
}

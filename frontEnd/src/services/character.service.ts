import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  skipWhile
} from 'rxjs';
import {
  Character
} from '../interfaces/character.interface'
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  reqParam = {};
  private character = new BehaviorSubject < Character > ({
    name: '',
    race: {
      name: '',
      alignment:'' ,
      size: '',
      size_description: '',
      age: '',
      speed: 1,
      description: '' ,
      starting_proficiencies_description: '',
      language_id: 1,
      language_id_2: 1,
      language_description: '',
      subrace_id: 1,
      ability_bonus_id: 1,
      ability_bonus_value: 1,
    },
    class: {
      name: '',
      hit_die: 10,
      subclass_id: 1,
      spellcasting_level: 1,
      spellcasting_ability_id: 1,
    },
    level: 1,
    alignment: '',
    abilities: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    hitPoints: 10,
    armorClass: 1,
    speed: 5,
    skills: [],
    inventory: [],
  });

  currentCharacter = this.character.asObservable();

  constructor(private rest: RestApiService,) {}

  updateData(character: Partial < Character > ) {
    this.character.next({...this.character.value, ...character});
    console.log(this.character.value, character);
  }
  getRace(id:number) {
    this.rest.getRemove(null,`race/get/${id}`, this.reqParam,'get').subscribe(
      (data: any) => {
        this.updateData({race:data});
       console.log('this should be a arace: ', data);

      }
     );
  }

  getClass(id:number) {
    this.rest.getRemove(null,`class/get/${id}`, this.reqParam,'get').subscribe(
      (data: any) => {
       this.updateData({class:data});
       console.log('this should be a class: ', data);

      }
     );
  }
}

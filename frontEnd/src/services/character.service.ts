import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private character = new BehaviorSubject({});

  currentCharacter = this.character.asObservable();

  constructor() { }

  updateData(character: any) {
    this.character.next(character);
  }
}





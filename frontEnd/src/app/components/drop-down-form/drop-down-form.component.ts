import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { race } from 'rxjs';
import { RestApiService } from 'src/services/rest-api.service';
import { CharacterService } from '../../../services/character.service';
import { MatOptionModule } from '@angular/material/core';
import { NgFor } from '@angular/common';


@Component({
    selector: 'app-drop-down-form',
    templateUrl: './drop-down-form.component.html',
    styleUrls: ['./drop-down-form.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, NgFor, MatOptionModule]
})
export class DropDownFormComponent {

form!: FormGroup;
races: {id: number, name: string}[] = [];
classes:{id: number, name: string}[]= [];
reqParam = {};
character:any;

constructor(private rest: RestApiService, private charService: CharacterService) {
  this.charService.currentCharacter.subscribe((character) => {
    this.character = character;
    console.log('chacter is: ', character);
  })
}
ngOnInit() {
  this.form = new FormGroup({
    races: new FormControl(),
    classes: new FormControl()
  });
  //this.character = this.charService.getCharacterData();
  console.log('this Character is: ', this.character);
  this.rest.getRemove(null,'character/dropStart', this.reqParam,'get').subscribe(
    (data: any) => {
      data.forEach((element: any) => {

        if (!this.races.some(obj => obj['id'] === element.id)) {
          this.races.push(element);
        } else {
          this.classes.push(element);
        }
      });
      console.log(`races: `, this.races);
      console.log(`classes `, this.classes);

    }
   );
   this.form.get('races')?.valueChanges.subscribe((id) => {
    this.charService.getRace(id)
   })
   this.form.get('classes')?.valueChanges.subscribe((id) => {
    this.charService.getClass(id)
   })
}


onSubmit(formData: any) {
  console.log(formData);
  // form submission logic goes here
}

}

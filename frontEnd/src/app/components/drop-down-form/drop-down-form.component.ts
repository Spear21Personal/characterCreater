import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { race } from 'rxjs';
import { RestApiService } from 'src/services/rest-api.service';
import { CharacterService } from '../../../services/character.service';


@Component({
  selector: 'app-drop-down-form',
  templateUrl: './drop-down-form.component.html',
  styleUrls: ['./drop-down-form.component.scss']
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
    console.log(this.character);
  })
}
ngOnInit() {
  this.form = new FormGroup({
    races: new FormControl(),
    classes: new FormControl()
  });

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
   this.form.get('races')?.valueChanges.subscribe((data) => {
    this.charService.updateData({race: data})
   })
}


onSubmit(formData: any) {
  console.log(formData);
  // form submission logic goes here
}

}

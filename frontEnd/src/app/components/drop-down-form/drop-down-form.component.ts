import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { race } from 'rxjs';
import { RestApiService } from 'src/services/rest-api.service';


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

constructor(private rest: RestApiService) {}
ngOnInit() {
  this.form = new FormGroup({
    races: new FormControl(),
    classes: new FormControl()
  });

  this.rest.getRemove(null,'character/dropStart', this.reqParam,'get').subscribe(

    (data: any) => {
      data.forEach((element: any) => {
        if (this.races && this.races.includes(element)) {
          this.classes.push(element);
        } else {
          this.races.push(element);
        }
      });
      console.log(`races ${this.races}`);
      console.log(`classes ${this.classes}`);

    }
   );
}


onSubmit(formData: any) {
  console.log(formData);
  // form submission logic goes here
}

}

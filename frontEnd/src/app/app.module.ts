import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbilityTileComponent } from './components/ability-tile/ability-tile.component';
import { DropDownFormComponent } from './components/drop-down-form/drop-down-form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CharcterGenComponent } from './components/charcter-gen/charcter-gen.component';
import { SvgAnimaitionComponent } from './components/svg-animaition/svg-animaition.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AbilityTileComponent,
    DropDownFormComponent,
    CharcterGenComponent,
    SvgAnimaitionComponent,
    CharacterSheetComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

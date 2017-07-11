import { Component } from '@angular/core';
import { Character } from './character/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  character: Character = null;

  addCharacter(newCharacter: Character) {
    this.character = newCharacter;
  }
}

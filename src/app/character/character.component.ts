import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from './character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characterCreated: boolean = false;
  character: Character = null;

  @Output() newCharacterSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  submitForm(name: string, age: number, pineapple: boolean) {
    var newCharacter: Character = new Character(name, age, pineapple);
    this.characterCreated = true;
    this.character = newCharacter;
    this.newCharacterSender.emit(newCharacter);
  }
}

import { Injectable } from '@angular/core';
import { Scene } from './scene/scene.model';
import { SCENES } from './mock-scenes';

@Injectable()
export class SceneService {

  constructor() { }

  getScene(id: number) {
    console.log('getScene triggered.')
    for (var i = 0; i <= SCENES.length - 1; i++) {
      console.log('i = ' + i);
      if (SCENES[i].id === id) {
        console.log(SCENES[i]);
        return SCENES[i];
      }
    }
  }

}

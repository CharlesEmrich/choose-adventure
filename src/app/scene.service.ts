import { Injectable } from '@angular/core';
import { Scene } from './scene/scene.model';
import { SCENES } from './mock-scenes';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SceneService {
  scenes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.scenes = database.list('scenes');
  }

  getScene(id: number) {
    return this.scenes[0];
    // for (var i = 0; i <= this.scenes.length - 1; i++) {
    //   if (this.scenes[i].id === id) {
    //     return this.scenes[i];
    //   }
    // }
  }
  getScenes(){
    return this.scenes;
  }

}

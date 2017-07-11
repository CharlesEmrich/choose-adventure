import { Component, OnInit } from '@angular/core';
import { Scene } from './scene.model';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  scene: Scene = null;

  constructor() { }

  ngOnInit() {
    this.scene = new Scene(1, 'The Woods', 'Some facts about the woods which prompt user action.', ['Get outta these woods', 'Go, ill-advisedly, deeper into these woods.']);
  }

}

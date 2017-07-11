import { Component, OnInit } from '@angular/core';
import { Scene } from './scene.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  scene: Scene = null;

  constructor(private router: Router) { }

  goToScene(id: number) {
    this.router.navigate(['scenes', id]);
  }

  ngOnInit() {
    this.scene = new Scene(1, 'The Woods', 'Some facts about the woods which prompt user action.', [[2, 'Get outta these woods'], [3, 'Go, ill-advisedly, deeper into these woods.']]);
  }

}

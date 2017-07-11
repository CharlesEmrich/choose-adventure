import { Component, OnInit } from '@angular/core';
import { Scene } from './scene.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SceneService } from './../scene.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
  providers: [SceneService]
})
export class SceneComponent implements OnInit {
  sceneToDisplay: Scene = null;
  sceneId: number = null;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private sceneService: SceneService) { }

  goToScene(id: number) {
    this.router.navigate(['scenes', id]);
    this.sceneToDisplay = this.sceneService.getScene(this.sceneId);
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.sceneId = parseInt(urlParameters['id']);
    });
    // console.log(   this.sceneService.getScene(this.sceneId));
   this.sceneToDisplay = this.sceneService.getScene(this.sceneId);
    // .then((scene) => {
    //  console.log(this.sceneToDisplay);
    //  this.sceneToDisplay = scene });
    console.log(this.sceneToDisplay);
  }

}

import { Component, OnInit } from '@angular/core';
import { Scene } from './scene.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SceneService } from './../scene.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
  providers: [SceneService]
})
export class SceneComponent implements OnInit {
  sceneToDisplay: Scene = new Scene(1, 'The Woods', 'Some facts about the woods which prompt user action.', [[2, 'Go to City'], [3, 'Go, ill-advisedly, to Space.']]);
  sceneId: number = null;
  scenes: FirebaseListObservable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private sceneService: SceneService) { }

  goToScene(id: number) {
    // console.log('goToScene triggered.')
    // this.router.navigate(['scenes', id]);
    // this.route.params.forEach((urlParameters) => {
    //   //NOTE: The following logs an increasing number of times over the runtime of the program. On first gTS fire, logs twice, then three times, etc.
    //   console.log(`Current paramId: ${parseInt(urlParameters["id"])}`);
    //   this.sceneId = parseInt(urlParameters['id']);
    //   this.sceneToDisplay = this.sceneService.getScene(this.sceneId);
    // });
  }

  ngOnInit() {
    this.scenes = this.sceneService.getScenes();
  //   this.route.params.forEach((urlParameters) => {
  //     this.sceneId = parseInt(urlParameters['id']);
  //   });
  //  this.sceneToDisplay = this.sceneService.getScene(this.sceneId);
  }

}

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { SceneComponent } from './scene/scene.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CharacterComponent
  },
  {
    path: 'scenes/:id',
    component: CharacterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

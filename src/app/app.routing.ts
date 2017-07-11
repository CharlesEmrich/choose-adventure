//NOTE: Grabbing a drink, will return shortly.

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';

const appRoutes: Routes = [
  {
  path: '',
  component: CharacterComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

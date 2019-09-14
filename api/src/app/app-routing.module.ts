import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'people', loadChildren: './people/people.module#PeoplePageModule' },
  { path: 'films', loadChildren: './films/films.module#FilmsPageModule' },
  { path: 'startships', loadChildren: './startships/startships.module#StartshipsPageModule' },
  { path: 'planets', loadChildren: './planets/planets.module#PlanetsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

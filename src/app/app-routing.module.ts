import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/about/about.module').then((m) => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

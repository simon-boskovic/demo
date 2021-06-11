import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '@homepage/components';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'autocomplete',
    loadChildren: () => import('src/app/autocomplete/autocomplete.module').then((m) => m.AutocompleteModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule {}

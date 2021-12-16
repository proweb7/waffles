import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MintComponent } from './pages/mint/mint.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path:'mint',
    component:MintComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

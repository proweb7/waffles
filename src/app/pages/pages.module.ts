import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { MintComponent } from './mint/mint.component';



@NgModule({
  declarations: [
    HomeComponent,
    MintComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { RoadmapSectionComponent } from './roadmap-section/roadmap-section.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MintSectionComponent } from './mint-section/mint-section.component';

const COMPONENTS = [
  IntroSectionComponent,
  RoadmapSectionComponent,
  FaqSectionComponent,
  HeroSectionComponent,
  MintSectionComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports:[...COMPONENTS]
})
export class ComponentsModule { }

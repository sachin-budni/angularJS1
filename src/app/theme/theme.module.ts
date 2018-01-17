import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "./button/button.module";
import { CardModule } from "./card/card.module";

@NgModule({
  imports: [
    CommonModule,ButtonModule,CardModule
  ],
  declarations: [],
  exports :[CardModule,ButtonModule]
})
export class ThemeModule { }

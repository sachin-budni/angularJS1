import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import { CourseComponentComponent } from './course-component/course-component.component';
import { subjectmodule } from "./subject.module";
import { ThemeModule } from "./theme/theme.module";


@NgModule({
  declarations: [
    AppComponent,
    CourseComponentComponent
  ],
  imports: [
    BrowserModule,subjectmodule,BrowserAnimationsModule,MatButtonModule,MatInputModule,
    MatRadioModule,MatCheckboxModule,ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

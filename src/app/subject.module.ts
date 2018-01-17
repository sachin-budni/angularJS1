import { NgModule } from '@angular/core';
import { subjectcomponent } from "./subject.component";

import {MatIconModule} from '@angular/material';

@NgModule({
    declarations:[
        subjectcomponent
    ],
    imports:[
        MatIconModule
    ],
    exports:[
        subjectcomponent
    ]
})

export class subjectmodule{}
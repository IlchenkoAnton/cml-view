import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilePageComponent } from './file-page.component';
import { FileRoutingModule } from './file-routing.module';
import { FileSelectionComponent } from './file-selection/file-selection.component';

@NgModule({
    imports: [
        FormsModule,
        FileRoutingModule
    ],
    declarations: [
        FilePageComponent,
        FileSelectionComponent
    ]
})
export class FileModule {}
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilePageComponent } from './file-page.component';
import { FileRoutingModule } from './file-routing.module';
import { FileService } from './file.service';
import { FileSelectionComponent } from './file-selection/file-selection.component';
import { CmlStoreService } from './cml-store.service';

@NgModule({
    imports: [
        FormsModule,
        FileRoutingModule
    ],
    declarations: [
        FilePageComponent,
        FileSelectionComponent
    ],
    providers: [
        CmlStoreService,
        FileService
    ]
})
export class FileModule {}
import { NgModule } from '@angular/core';

import { FilePageComponent } from './file-page.component';
import { FileRoutingModule } from './file-routing.module';

@NgModule({
    declarations: [
        FilePageComponent
    ],
    imports: [
        FileRoutingModule
    ]
})
export class FileModule {}
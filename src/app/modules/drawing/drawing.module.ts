import { NgModule } from '@angular/core';

import { CanvasComponent } from './canvas/canvas.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';
import { DrawingLibraryService } from './drawing-library.service';

@NgModule({
    imports: [],
    declarations: [
        CanvasComponent,
        ToolbarComponent,
        ContainerComponent
    ],
    exports: [
        ContainerComponent
    ],
    providers: [
        DrawingLibraryService
    ]
})
export class DrawingModule {}
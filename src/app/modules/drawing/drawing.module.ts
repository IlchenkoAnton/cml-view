import { NgModule } from '@angular/core';

import { CanvasComponent } from './canvas/canvas.component';
import { DrawingCoreService } from './drawing-core.service';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    imports: [],
    declarations: [
        CanvasComponent,
        ToolbarComponent
    ],
    exports: [
        CanvasComponent,
        ToolbarComponent
    ],
    providers: [
        DrawingCoreService
    ]
})
export class DrawingModule {}
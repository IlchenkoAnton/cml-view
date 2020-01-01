import { NgModule } from '@angular/core';

import { CanvasComponent } from './canvas/canvas.component';
import { DrawingCoreService } from './drawing-core.service';

@NgModule({
    imports: [],
    declarations: [
        CanvasComponent
    ],
    exports: [
        CanvasComponent
    ],
    providers: [
        DrawingCoreService
    ]
})
export class DrawingModule {}
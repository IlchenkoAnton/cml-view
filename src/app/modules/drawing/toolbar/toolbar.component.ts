import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DrawingCoreService } from '../drawing-core.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: [ './toolbar.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
    constructor(private readonly drawingCoreService: DrawingCoreService) {}

    public addSphere(): void {
        //
    }

    public addCube(): void {
        this.drawingCoreService.drawCube();
    }
}
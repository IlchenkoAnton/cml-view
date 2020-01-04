import { Component, ChangeDetectionStrategy } from '@angular/core';

import { DrawingCoreService } from '../drawing-core.service';
import { DrawingLibraryService } from '../drawing-library.service';
import { Mesh } from 'three';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: [ './container.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DrawingCoreService
    ]
})
export class ContainerComponent {
    constructor(
        private readonly drawingCoreService: DrawingCoreService,
        private readonly drawingLibraryService: DrawingLibraryService
    ) {}

    public drawCube(): void {
        const cube: Mesh = this.drawingLibraryService.getCube();

        this.drawingCoreService.addObjectToScene(cube);
    }

    public drawSphere(): void {
        //
    }
}
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Mesh } from 'three';

import { DrawingCoreService } from '../drawing-core.service';
import { DrawingLibraryService } from '../drawing-library.service';

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
        const cube: Mesh = this.drawingLibraryService.getCube(1);

        this.drawingCoreService.addObjectToScene(cube);
    }

    public drawSphere(): void {
        const sphere: Mesh = this.drawingLibraryService.getSphere();

        this.drawingCoreService.addObjectToScene(sphere);
    }

    public cleanScene(): void {
        this.drawingCoreService.removeAllObjectToScene();
    }
}
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Mesh, Line, Object3D } from 'three';
import * as _ from 'lodash';

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
        const cube: Mesh = this.drawingLibraryService.getCube(0.3);

        this.setRandomPosition(cube);
        this.drawingCoreService.addObjectToScene(cube);
    }

    public drawSphere(): void {
        const sphere: Mesh = this.drawingLibraryService.getSphere(0.15);

        this.setRandomPosition(sphere);
        this.drawingCoreService.addObjectToScene(sphere);
    }

    public drawLine(): void {
        const line: Line = this.drawingLibraryService.getLine();

        this.setRandomPosition(line);
        this.drawingCoreService.addObjectToScene(line);
    }

    public cleanScene(): void {
        this.drawingCoreService.removeAllObjectToScene();
    }

    private setRandomPosition(item: Object3D): void {
        item.position.x = _.random(-2.5, 2.5);
        item.position.y = _.random(-2.5, 2.5);
        item.position.z = _.random(-2.5, 2.5);
    }
}
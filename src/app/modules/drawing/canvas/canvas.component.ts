import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { DrawingCoreService } from '../drawing-core.service';
import { DrawingLibraryService } from '../drawing-library.service';
import { DirectionalLight } from 'three';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: [ './canvas.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasComponent implements AfterViewInit {
    private canvas: ElementRef;

    @ViewChild('canvas', { static: false })
    set CanvasContainer(value: ElementRef) {
        this.canvas = value;
    }

    constructor(
        private readonly drawingCoreService: DrawingCoreService,
        private readonly drawingLibraryService: DrawingLibraryService
    ) {}

    public ngAfterViewInit(): void {
        if (this.canvas) {
            const light: DirectionalLight = this.drawingLibraryService.getDirectionalLight();

            this.drawingCoreService.initialization(this.canvas.nativeElement);
            this.drawingCoreService.addObjectToScene(light);
        } else {
            console.error('canvas: ', this.canvas);
        }
    }
}
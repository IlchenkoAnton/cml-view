import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { DrawingCoreService } from '../drawing-core.service';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: [ './canvas.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasComponent implements AfterViewInit {
    private canvasContainer: ElementRef;

    @ViewChild('canvasContainer', { static: false })
    set CanvasContainer(value: ElementRef) {
        this.canvasContainer = value;
    }

    constructor(private readonly drawingCoreService: DrawingCoreService) {}

    public ngAfterViewInit(): void {
        this.drawingCoreService.initialization(this.canvasContainer);
    }
}
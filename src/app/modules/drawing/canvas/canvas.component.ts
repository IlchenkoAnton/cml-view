import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { DrawingCoreService } from '../drawing-core.service';

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

    constructor(private readonly drawingCoreService: DrawingCoreService) {}

    public ngAfterViewInit(): void {
        if (this.canvas) {
            this.drawingCoreService.initialization(this.canvas.nativeElement);
        } else {
            console.error('canvas: ', this.canvas);
        }
    }
}
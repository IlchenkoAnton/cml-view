import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: [ './toolbar.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
    @Output()
    public addCube: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public addSphere: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    public selectCube(): void {
        this.addCube.emit();
    }

    public selectSphere(): void {
        this.addSphere.emit();
    }
}
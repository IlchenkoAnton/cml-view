import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as _ from 'lodash';

import { FileService } from '../file.service';

@Component({
    selector: 'app-file-selection',
    templateUrl: './file-selection.component.html',
    styleUrls: [ './file-selection.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileSelectionComponent {
    constructor(private readonly fileService: FileService) {}

    public selectFile(event: Event): void {
        const file: File = _.get(event, 'target.files.0', null);

        this.fileService.readFile(file);
    }
}
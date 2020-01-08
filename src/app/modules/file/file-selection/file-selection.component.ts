import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-file-selection',
    templateUrl: './file-selection.component.html',
    styleUrls: [ './file-selection.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileSelectionComponent {
    public selectFile(event: Event): void {
        const file: File = _.get(event, 'target.files.0', null);

        if (file) {
            const reader: FileReader = new FileReader();

            reader.readAsText(file);
            reader.onload = (result) => {
                // reader.result;
            };
            reader.onerror = (error) => {
                // TODO Обработать ошибку
            };
        }
    }
}
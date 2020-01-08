import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { CmlStoreService } from './cml-store.service';

@Injectable()
export class FileService {
    constructor(private readonly cmlStoreService: CmlStoreService) {}

    public readFile(file: File): void {
        if (file) {
            const reader: FileReader = new FileReader();

            reader.readAsText(file);
            reader.onload = () => {
                const cml: any = this.parsingCml(reader.result as string);

                this.cmlStoreService.setCml(cml);
            };
            reader.onerror = (error) => {
                this.cmlStoreService.setCml(null);
            };
        }
    }

    private parsingCml(cml: string): any {
        const parser: DOMParser = new DOMParser();
        const result: Document = parser.parseFromString(cml, 'application/xml');

        //const molecules: NodeListOf<Element> = result.querySelectorAll('molecule');

        return null; // TODO Добавить разбор cml
    }
}
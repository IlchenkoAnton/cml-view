import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class CmlStoreService {
    private cml: any;

    public getCml(): any {
        return _.cloneDeep(this.cml);
    }

    public setCml(value: any): void {
        this.cml = value;
    }
}
import {
    Injectable
 } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Injectable()
export class StrConversion {
    constructor() {}
    toCarmelCase(str: any) {
        let arr = [];
        for (const each of str) {
            arr.push(each[0].toUpperCase() + each.slice(1));
        }
        return arr;
    }
}

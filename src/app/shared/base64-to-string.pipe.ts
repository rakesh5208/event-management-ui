import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'base64tostring'
})
export class Base64ToString implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return atob(value);
    }
}

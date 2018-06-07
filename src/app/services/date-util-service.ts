import { Injectable } from '@angular/core';
@Injectable()
export class DateUtil {
    constructor() { }
    public convertJSDateToMillisec(date: string) {
        return Date.parse(date);
    }

    public formateDateToHtmlDatetimeLocale(date: Date): string {
        console.log(date.getUTCMonth());
        const formatedDate = [
            date.getUTCFullYear(),
            '-',
            this.prefixZero(date.getMonth() + 1),
            '-',
            this.prefixZero(date.getUTCDate()),
            'T',
            this.prefixZero(date.getHours()),
            ':',
            this.prefixZero(date.getMinutes())
        ].join('');
        return formatedDate;
    }

    private prefixZero(value: number): string {
        if (value < 10) {
            return '0' + value;
        } else {
            return '' + value;
        }
    }
}
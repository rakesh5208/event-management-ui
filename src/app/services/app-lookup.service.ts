import { Injectable } from '@angular/core';

@Injectable()
export class AppLookService {
    readonly baseApiEndPoint = 'http://localhost:8090';
    constructor() { }
    public getBaseApiEndPoint() {
        return this.baseApiEndPoint;
    }
}

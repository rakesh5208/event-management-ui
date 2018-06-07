import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppLookService } from './../services';
import { Event } from '../model';

@Injectable()
export class EventDaoService {
    private baseUrl = '';
    constructor(private http: HttpClient,
        private lookupService: AppLookService) {
        this.baseUrl = this.lookupService.getBaseApiEndPoint() + '/events';
    }

    getAllEvents() {
        return this.http.get<Event[]>(this.baseUrl);
    }
    createEvent(event: Event) {
        return this.http.post<Event>(this.baseUrl, event);
    }
    updateEvent(id: string, event: Event) {
        return this.http.put<Event>(this.baseUrl + '/' + id, event);
    }
    getEvent(id: string) {
        return this.http.get<Event>(this.baseUrl + '/' + id);
    }
    deleteEvent(id: string) {
        return this.http.delete(this.baseUrl + '/' + id, { responseType: 'text' });
    }
}

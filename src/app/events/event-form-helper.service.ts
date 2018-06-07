import { DateUtil } from './../services/date-util-service';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../model';

@Injectable()
export class EventFormHelperService {
    constructor(private fb: FormBuilder,
        private dateUtil: DateUtil) { }

    /**
     * Build the form, with the given event data
     * @param event: event data
     */
    buildForm(event?: Event) {
        if (!event) {
            event = this.getDefaultEvent();
        }
        return this.fb.group({
            'id': [event.id],
            'title': [event.title || '', Validators.required],
            'description': [event.description || '', Validators.required],
            'startDateAndTime': [this.convertMillisecToJSDate(event.startDateAndTime) || '', Validators.required],
            'duration': [event.duration || '', Validators.required],
            'whenCreated': [event.whenCreated],
            'whenLastUpdated': [event.whenLastUpdated]
        });
    }
    convertMillisecToJSDate(millisec: number) {
        if (millisec > 0) {
            return this.dateUtil.formateDateToHtmlDatetimeLocale(new Date(millisec));
        } else {
            return millisec;
        }

    }
    getDefaultEvent(): Event {
        return {
            id: null,
            title: '',
            description: '',
            startDateAndTime: 0,
            duration: 0,
            whenCreated: 0,
            whenLastUpdated: 0
        };
    }
}

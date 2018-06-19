import { NotificationType } from 'angular2component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventDaoService } from '../event-dao.service';
import { Event } from '../../model';
import { EventFormHelperService } from '../event-form-helper.service';
import {
  DateUtil,
  NotificationHelperService
} from '../../services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  title = 'Add Event';
  addEventForm: FormGroup = null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private eventDao: EventDaoService,
    private formHelper: EventFormHelperService,
    private dateUtil: DateUtil,
    private notificationService: NotificationHelperService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.addEventForm = this.formHelper.buildForm();
  }
  submit() {
    if (this.addEventForm.valid) {
      this.formHelper.patchForm(this.addEventForm, 'colors', this.getRandomColors());
      console.log(this.addEventForm.value);
      const eventData = this.addEventForm.value;
      eventData.startDateAndTime = this.dateUtil.convertJSDateToMillisec(eventData.startDateAndTime);
      eventData.description = btoa(eventData.description);
      this.eventDao.createEvent(eventData).subscribe((value) => {
        this.cancel();
        this.notificationService.showMessage('Event has been success fully created',
          NotificationType.SUCCESS);
      }, (error) => {
        this.notificationService.showMessage('Unable to create event', NotificationType.ERROR);
        console.log('error occured', error);
      });
    } else {
      console.log('Your form is not valid one', this.addEventForm.value);
    }
  }
  cancel() {
    this.router.navigate(['list']);
  }

  getRandomColors() {
    const colors = [];
    for (let i = 0; i < 3; i++) {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      colors[i] = {
        red: r,
        green: g,
        blue: b
      };
    }
    return colors;
  }
}

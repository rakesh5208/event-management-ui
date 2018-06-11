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
      const eventData = this.addEventForm.value;
      eventData.startDateAndTime = this.dateUtil.convertJSDateToMillisec(eventData.startDateAndTime);
      this.eventDao.createEvent(eventData).subscribe((value) => {
        this.cancel()
        this.notificationService.showMessage('Event has been success fully created', 
        NotificationType.SUCCESS);
      }, (error) => {
        console.log('error occured', error);
      });
    } else {
      console.log('Your form is not valid one', this.addEventForm.value);
    }
  }
  cancel() {
    this.router.navigate(['list']);
  }
}

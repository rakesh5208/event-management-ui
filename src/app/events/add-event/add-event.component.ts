import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventDaoService } from '../event-dao.service';
import { Event } from '../../model';
import { EventFormHelperService } from '../event-form-helper.service';
import { DateUtil } from '../../services/date-util-service';
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
    private dateUtil: DateUtil) { }

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
        console.log('successfully created', value);
      }, (error) => {
        console.log('error occured', error);
      });
    } else {
      console.log('Your form is not valid one', this.addEventForm.value);
    }
  }
  Cancel() {
    this.router.navigate(['list']);
  }
}

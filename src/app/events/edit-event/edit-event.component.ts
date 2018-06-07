import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDaoService } from '../event-dao.service';
import { Event } from '../../model';
import { FormGroup } from '@angular/forms';
import { DateUtil } from '../../services/date-util-service';
import { EventFormHelperService } from './../event-form-helper.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event: Event = null;
  title = 'Edit Event';
  isInEdit = false;
  eventForm: FormGroup = null;
  private eventId = null;
  constructor(private activeRoute: ActivatedRoute,
    private eventDao: EventDaoService,
    private router: Router,
    private formHelper: EventFormHelperService,
    private dateUtil: DateUtil) { }

  ngOnInit() {
    this.eventId = this.activeRoute.snapshot.paramMap.get('id');
    this.getEvent();
  }

  redirectToList() {
    this.router.navigate(['list']);
  }
  save() {
    if (this.eventForm.valid) {
      const eventData = this.eventForm.value;
      eventData.startDateAndTime = this.dateUtil.convertJSDateToMillisec(eventData.startDateAndTime);
      this.eventDao.updateEvent(this.eventId, eventData).subscribe((value) => {
        this.getEvent();
        this.isInEdit = false;
      }, (error) => {
        console.log('error occured', error);
      });
    } else {
      console.log('Your form is not valid one');
    }
  }

  getEvent() {
    this.eventDao.getEvent(this.eventId).subscribe(event => {
      this.event = event;
      this.eventForm = this.formHelper.buildForm(this.event);
    });
  }
  cancel() {
    this.getEvent();
    this.isInEdit = false;
  }
}

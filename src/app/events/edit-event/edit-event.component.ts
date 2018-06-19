import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDaoService } from '../event-dao.service';
import { Event } from '../../model';
import { FormGroup } from '@angular/forms';
import { DateUtil } from '../../services/date-util-service';
import { EventFormHelperService } from './../event-form-helper.service';
import { NotificationHelperService } from '../../services/notificaiton-helper.service';
import { NotificationType } from 'angular2component';
import { Color } from '../../model/color';

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
  eventTitleBg = '';
  constructor(private activeRoute: ActivatedRoute,
    private eventDao: EventDaoService,
    private router: Router,
    private formHelper: EventFormHelperService,
    private dateUtil: DateUtil,
    private notifyService: NotificationHelperService) {

  }

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
      eventData.description = btoa(eventData.description);
      this.eventDao.updateEvent(this.eventId, eventData).subscribe((value) => {
        this.getEvent();
        this.isInEdit = false;
        this.notifyService.showMessage('Successfully Saved', NotificationType.SUCCESS);
      }, (error) => {
        this.notifyService.showMessage('Unable to save event', NotificationType.ERROR);
        console.log('error occured', error);
      });
    } else {
      console.log('Your form is not valid one');
    }
  }

  getEvent() {
    this.eventDao.getEvent(this.eventId).subscribe(event => {
      this.event = event;
      this.setEventTitleBg(event.colors);
    }, (error) => {
      this.notifyService.showMessage('Unable to load the event with id:' + this.eventId, NotificationType.ERROR);
    });
  }
  cancel() {
    this.getEvent();
    this.isInEdit = false;
  }
  enableEdit() {
    this.isInEdit = true;
    this.eventForm = this.formHelper.buildForm(this.event);
  }

  setEventTitleBg(colors: Color[]) {
    if (colors.length === 3) {
      this.eventTitleBg = `linear-gradient(35deg,rgb(${colors[0].red},${colors[0].green},${colors[0].blue}),
    rgb(${colors[1].red},${colors[1].green},${colors[1].blue}),
    rgb(${colors[2].red},${colors[2].green},${colors[2].blue}))`;
    }
  }
}

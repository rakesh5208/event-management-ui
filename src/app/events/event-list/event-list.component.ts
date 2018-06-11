import { EventFormHelperService } from './../event-form-helper.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Event } from '../../model';
import { EventDaoService } from '../event-dao.service';
import { NotificationService } from 'angular2component';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Array<Event> = [];
  title = 'Available Events';
  loading = false;
  modalState = false;
  selectedEvent = null;
  constructor(private eventDao: EventDaoService,
    private router: Router,
    private notifyService: NotificationService,
    private eventFormHelper: EventFormHelperService) { }

  ngOnInit() {
    this.getAllEvents();
    //delete modal state;
    this.eventFormHelper.deleteModalState.subscribe((value)=>{
      this.modalState = value.open;
      if(value.reload){
        this.getAllEvents();
      }
    })
  }
  redirectTo(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }
  getAllEvents() {
    // this.notifyService.showMessage('Sample message')
    this.loading = true;
    this.eventDao.getAllEvents().subscribe((events) => {
      this.loading = false;
      this.events = events;
    }, (error) => {
      this.loading = false;
      this.notifyService.showError('Error Occured: while loading list', {
        timeout: 3000
      }
      );
      console.log("Error Occured", error);
    });
  }
  showModal(event: Event) {
    this.selectedEvent = event;
    this.modalState = true;
  }
}

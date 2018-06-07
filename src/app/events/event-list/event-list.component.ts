import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Event } from '../../model';
import { EventDaoService } from '../event-dao.service';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Array<Event> = [];
  title = 'Available Events';
  constructor(private eventDao: EventDaoService,
    private router: Router) { }

  ngOnInit() {
    this.getAllEvents();
  }
  redirectTo(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }
  deleteEvent(id) {
    this.eventDao.deleteEvent(id).subscribe((result) => {
      console.log('SuccessFully Deleted record: ' + id);
      this.getAllEvents();
    }, (error) => {
      console.log('Error Occured', error);
    });
  }
  getAllEvents() {
    this.eventDao.getAllEvents().subscribe((events) => {
      this.events = events;
    });
  }
}

import { NotificationType } from 'angular2component';
import { NotificationHelperService } from './../../services/notificaiton-helper.service';
import { EventFormHelperService } from './../event-form-helper.service';
import { Component, OnInit, Input } from '@angular/core';
import { EventDaoService } from '../event-dao.service';
import { Event } from '../../model'
@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() event: Event = null;
  constructor(private eventDao: EventDaoService,
    private eventFormHelper: EventFormHelperService,
    private notifyService: NotificationHelperService) { }

  ngOnInit() {
  }
  confirmDelete() {
    this.eventDao.deleteEvent('' + this.event.id).subscribe((result) => {
      console.log('SuccessFully Deleted record: ' + this.event.id);
      this.cancelModal(true);
      this.notifyService.showMessage('Event has been successfully deleted',NotificationType.SUCCESS)
    }, (error) => {
      console.log('Error Occured', error);
      // this.loading = false;
    });
  }
  cancelModal(reload: boolean) {
    this.eventFormHelper.deleteModalState.next({ open: false, reload: reload })
  }
}

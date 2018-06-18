import { ReactiveFormsModule } from '@angular/forms';
import { EventDaoService } from './event-dao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingModule } from 'angular2component'

import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventFormHelperService } from './event-form-helper.service';
import { TimeConverterPipe } from '../shared/time-converter.pipe';
import { SharedModule } from '../shared/shared.module';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    LoadingModule,
    CommentsModule
    // EventsRoutingModule
  ],
  declarations: [
    EventListComponent,
    AddEventComponent,
    EditEventComponent,
    DeleteEventComponent
  ],
  providers: [
    EventDaoService,
    EventFormHelperService
  ]
})
export class EventsModule { }

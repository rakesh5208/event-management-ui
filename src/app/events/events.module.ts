import { ReactiveFormsModule } from '@angular/forms';
import { EventDaoService } from './event-dao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventFormHelperService } from './event-form-helper.service';
import { TimeConverterPipe } from '../shared/time-converter.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    // EventsRoutingModule
  ],
  declarations: [
    EventListComponent,
    AddEventComponent,
    EditEventComponent
  ],
  providers: [
    EventDaoService,
    EventFormHelperService
  ]
})
export class EventsModule { }

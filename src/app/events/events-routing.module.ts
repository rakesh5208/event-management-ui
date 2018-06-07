import { EditEventComponent } from './edit-event/edit-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  { path: 'list', component: EventListComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'edit-event/:id', component: EditEventComponent },
  { path: '', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

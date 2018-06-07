import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';

const routes: Routes = [
  { path: 'list', component: EventListComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'edit-event/:id', component: EditEventComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

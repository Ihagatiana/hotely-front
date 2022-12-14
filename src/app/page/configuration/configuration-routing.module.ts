import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { PersonComponent } from './person/person.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { 
    path: '', 
    component: ConfigurationComponent,
    children:[
      {path: 'room', component: RoomComponent},
      {path: 'person', component: PersonComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }

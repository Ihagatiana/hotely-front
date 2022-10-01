import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RoomComponent } from './room/room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    ConfigurationComponent,
    SideMenuComponent,
    RoomComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConfigurationModule { }

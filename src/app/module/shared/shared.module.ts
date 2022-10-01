import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalMessageComponent } from '../../component/message/global-message/global-message.component';

@NgModule({
  declarations: [
    GlobalMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalMessageComponent
  ]
})
export class SharedModule { }

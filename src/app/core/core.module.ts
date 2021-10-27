import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule { }

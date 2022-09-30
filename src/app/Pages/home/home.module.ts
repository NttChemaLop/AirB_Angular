import { DepartmentComponent } from 'src/app/Components/department/department.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
@NgModule({
  declarations: [
   HomeComponent,
   DepartmentComponent
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule

  ]
})
export class HomeModule { }
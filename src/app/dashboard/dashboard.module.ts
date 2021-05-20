import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ToursComponent } from "./tours/tours.component";
import { EditTourComponent } from "./tours/edit-tour/edit-tour.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ViewTourComponent } from './tours/view-tour/view-tour.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
    
  ],
  declarations: [DashboardComponent, ToursComponent, EditTourComponent, ViewTourComponent],
  entryComponents: [
    EditTourComponent
  ]
})
export class DashboardModule {}

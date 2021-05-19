import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourDetailsResolve } from '../resolve/tourDetails.resolve';
import { TourLocationsResolve } from '../resolve/tourLocations.resolve';
import { ToursListResolve } from '../resolve/tours.resolve';
import { DashboardComponent } from './dashboard.component';
import { ViewTourComponent } from './tours/view-tour/view-tour.component';

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        resolve: {
          tours: ToursListResolve
        }
    },
    {
      path: "tour/:id",
      component: ViewTourComponent,
      resolve: {
        tourDetails: TourDetailsResolve,
        locations: TourLocationsResolve
      }
    }   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DashboardService } from "../service/dashboard.service";
import { Tour } from "../core/models/tour.model";
import { MessageService } from "../core/services/message.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public beginnerTours: Array<Tour> = [];
  public advancedTours: Array<Tour> = [];

  constructor(
    private _dashboardService: DashboardService,
    private _route: ActivatedRoute,
    private _messageService: MessageService
  ) {
    if (this._route.snapshot.data) {
      this._route.snapshot.data.tours.payload.map((tour) => {
        if (tour.category === "BEGINNER") {
          this.beginnerTours.push(tour);
        } else {
          this.advancedTours.push(tour);
        }
      });
    }
  }

  ngOnInit() {
    this.getToursList();
  }

  getToursList() {
    this._dashboardService.updateToursList.subscribe(() => {
      this._dashboardService.getToursList().subscribe((resp) => {
        let beginner = [];
        let advanced = [];
        resp["payload"].map((tour) => {
          if (tour.category === "BEGINNER") {
            beginner.push(tour);
          } else {
            advanced.push(tour);
          }
        });
        this.beginnerTours = beginner;
        this.advancedTours = advanced;
      },error => {
        this._messageService.failureMessage(error);
      });
    });
  }
}

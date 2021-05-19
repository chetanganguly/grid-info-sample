import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ApiService } from "../core/services/api.service";

@Injectable({providedIn: "root"})

export class DashboardService {

    public updateToursList: Subject<boolean>;

    constructor(
        private _apiService: ApiService
    ) {
        this.updateToursList = new Subject();
    }

    getToursList() {
        return this._apiService.get("/api/tours");
    }

    getTourDetails(tourId: number) {
        return this._apiService.get(`/api/tours/${tourId}`);
    }

    updateTours(tourId: number, body) {
        return this._apiService.put(`/api/tours/${tourId}`, body);
    }
}
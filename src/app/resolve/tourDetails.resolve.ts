import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ApiService } from "../core/services/api.service";

@Injectable({
    providedIn: "root"
})

export class TourDetailsResolve {
    constructor(private _apiService : ApiService){}
    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
        return this._apiService.get(`/api/tours/${route.params.id}`);
    }
}

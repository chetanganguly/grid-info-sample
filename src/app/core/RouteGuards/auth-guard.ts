import { Injectable } from "@angular/core";
import { CanLoad, Route, Router } from "@angular/router";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanLoad {
  constructor(private _router: Router) {
  }
 
  canLoad(route: Route): boolean {
    
    //determine whether you want to load the module
    //return true or false
    if(!localStorage.getItem("loggedIn")){
        this._router.navigateByUrl("login");
        return false;
    }
    return true;
}
} 
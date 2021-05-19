import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: "root" })
export class MessageService {
  constructor(private _matSnackBar: MatSnackBar) {}

  successMessage(message: string): void {
    this._matSnackBar.open(message, "OK", {
      verticalPosition: "top",
      horizontalPosition: "center",
      panelClass: ["success-alert"],
    //   duration: 2000
    });
  } 

  failureMessage(error: string): void {
    this._matSnackBar.open(error, "OK", {
      verticalPosition: "top",
      horizontalPosition: "center",
      panelClass: ["warning-alert"],
    //   duration: 6000
    });
  }
}
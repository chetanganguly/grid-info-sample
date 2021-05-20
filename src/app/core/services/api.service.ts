import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({providedIn:"root"})

export class ApiService {
    constructor(private _http: HttpClient) { }

  private formatErrors(error: any) {
    return throwError(error);
  }

  get(path: string, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders(), responseType: any = ""): Observable<any> {
    return this._http
      .get(`${environment.api_url}${path}`, { params, headers, responseType: responseType })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this._http
      .put(`${environment.api_url}${path}`,body,{headers})
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this._http
      .post(`${environment.api_url}${path}`, body,{headers})
      .pipe(catchError(this.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this._http
      .patch(`${environment.api_url}${path}`, body)
      .pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this._http
      .delete(`${environment.api_url}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}
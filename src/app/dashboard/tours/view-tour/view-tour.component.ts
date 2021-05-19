import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'view-tour',
  templateUrl: './view-tour.component.html',
  styleUrls: ['./view-tour.component.scss']
})
export class ViewTourComponent implements OnInit {

  public tourForm: FormGroup;
  public tourDetails;
  public dataSource;
  public displayedColumns= ["seq", "location", "days"];
  public searchElement: FormControl = new FormControl();

  constructor(
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    if(this._route.snapshot.data) {
      this.tourDetails = this._route.snapshot.data.tourDetails;
      this.dataSource = new MatTableDataSource(this._route.snapshot.data.locations.payload);
    }
   }

  ngOnInit(): void {
    this.createForm();
    this.tourForm.patchValue(this.tourDetails);
    this.searchText();
  }

  createForm() {
    this.tourForm = this._formBuilder.group({
      category: [{value: "", disabled: true}, Validators.required],
    description: [{value: "", disabled: true}, Validators.required],
    courseListIcon: [{value: "", disabled: true}, Validators.required],
    id: [{value: null, disabled: true}, Validators.required],
    longDescription: [{value: "", disabled: true}, Validators.required ]
    })
  }

  searchText() {
    if (this.searchElement) {
      this.searchElement.valueChanges
      .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      ).subscribe(resp => {
        this.dataSource.filter = resp.trim().toLowerCase();
      })
  }

}
}

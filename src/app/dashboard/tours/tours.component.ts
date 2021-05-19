import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { Tour } from '../../core/models/tour.model';

@Component({
  selector: 'tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  @Input() tours: [Tour];

  constructor(
    private _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  viewTour(tourId: number) {
    this._router.navigate([`tour/${tourId}`],{relativeTo: this._route})
  }

  editTour(tourId: number) {
    let dialogRef = this._dialog.open(EditTourComponent,{
      width: '470px',
      height: '490px',
      data: {tourId: tourId}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        
      }
    });
  }

}

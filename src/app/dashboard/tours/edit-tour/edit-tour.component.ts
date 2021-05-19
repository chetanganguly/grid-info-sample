import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from '../../../core/services/message.service';
import { DashboardService } from '../../../service/dashboard.service';

@Component({
  selector: 'edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.scss']
})
export class EditTourComponent implements OnInit {

  public tourForm: FormGroup;
  public categoryList = ["BEGINNER", "ADVANCED"];

  constructor(
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {tourId: string},
    private _dialogRef: MatDialogRef<EditTourComponent>,
    private _dashboardService: DashboardService,
    private _messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getTourDetails();
  }

  createForm() {
    this.tourForm = this._formBuilder.group({
      category: ["", Validators.required],
    description: ["", Validators.required],
    id: [null, Validators.required],
    longDescription: ["", Validators.required ]
    })
  }

  getTourDetails() {
    this._dashboardService.getTourDetails(parseInt(this.data.tourId)).subscribe(resp => {
      this.tourForm.patchValue(resp);
    },error => {
      this._messageService.failureMessage(error);
    })
  }

  cancel() {
    this._dialogRef.close(false);
  }

  save() {
    this._dashboardService.updateTours(parseInt(this.data.tourId), this.tourForm.value).subscribe(resp => {
      this._messageService.successMessage("Tour updated successfully.");
      this._dashboardService.updateToursList.next(true);
      this._dialogRef.close(true);
    },error => {
      this._messageService.failureMessage(error);
    })
  }

}

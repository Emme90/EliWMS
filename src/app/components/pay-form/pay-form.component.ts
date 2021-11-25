import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesMap } from 'src/app/models/constants';

@Component({
  selector: 'hem-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss'],
})
export class PayFormComponent implements OnInit {
  @Output() payBackBtnEmitter: EventEmitter<undefined> = new EventEmitter();

  cardNumberCtrl: string = '';
  cvvCtrl: string = '';
  exDateCrtl: string = '';
  nameCrtl: string = '';
  surnameCrtl: string = '';

  payFormGroup!: FormGroup;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.payFormGroup = new FormGroup({
      cardNumber: new FormControl(this.cardNumberCtrl, Validators.required),
      cvv: new FormControl(this.cvvCtrl, Validators.required),
      expiringDate: new FormControl(this.exDateCrtl, Validators.required),
      name: new FormControl(this.nameCrtl, Validators.required),
      surname: new FormControl(this.surnameCrtl, Validators.required),
    });
  }

  onPayBackBtn() {
    this.payBackBtnEmitter.emit();
  }

  onPayFormSubmit() {
    this._router.navigate([RoutesMap.bookings]);
  }
}

import { Component, OnInit } from '@angular/core';
import { BookingTabs } from 'src/app/models/booking';
import { Movie } from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
import {
  popolateWeekDateFromToDay,
  popolateTimeSlots,
} from 'src/app/services/utils.service';

@Component({
  selector: 'hem-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss'],
})
export class NewBookingComponent implements OnInit {
  bookingTabs = BookingTabs;
  nextWeek: Date[] = popolateWeekDateFromToDay();
  newDate: Date = new Date();
  selectedMovie!: Movie;
  selectedTab: { label: string; active: boolean } = {
    label: 'dateTime',
    active: true,
  };

  constructor(private _dataSrv: DataService) {
    this._dataSrv.movieSubject.subscribe(
      (response: Movie) => {
        this.selectedMovie = response;
      },
      (error) => console.warn('ERROR: ', error)
    );
  }

  ngOnInit(): void {}

  onDateTimeProceedBtn() {
    this.selectedTab = {
      label: BookingTabs.seat,
      active: true,
    };
  }

  onPayBackBtn() {
    this.selectedTab = {
      label: BookingTabs.seat,
      active: true,
    };
  }

  // onPayProceedBtn() {
  //   this._router.navigate([RoutesMap.bookings]);
  // }

  onSeatBackBtn() {
    this.selectedTab = {
      label: BookingTabs.dateTime,
      active: true,
    };
  }

  onSeatProceedBtn() {
    this.selectedTab = {
      label: BookingTabs.pay,
      active: true,
    };
  }

  onTabClick(tab: string) {
    if (!tab) {
      return;
    }
    this.selectedTab.label = tab;
    this.selectedTab.active = true;
  }
}

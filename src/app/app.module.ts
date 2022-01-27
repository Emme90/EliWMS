import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListDetailComponent } from './components/movie-list-detail/movie-list-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './components/star/star.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { BookingCardComponent } from './components/booking-card/booking-card.component';
import { DateComponent } from './components/date/date.component';
import { TimeSlotComponent } from './components/time-slot/time-slot.component';
import { DateTimeSlotComponent } from './components/date-time-slot/date-time-slot.component';
import { ScreenComponent } from './components/screen/screen.component';
import { SeatsComponent } from './components/seats/seats.component';
import { PayFormComponent } from './components/pay-form/pay-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeatComponent } from './components/seat/seat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    RoundButtonComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieListDetailComponent,
    StarComponent,
    BookingsComponent,
    NewBookingComponent,
    BookingCardComponent,
    DateComponent,
    TimeSlotComponent,
    DateTimeSlotComponent,
    ScreenComponent,
    SeatsComponent,
    SeatComponent,
    PayFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

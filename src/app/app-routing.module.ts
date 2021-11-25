import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesMap } from './models/constants';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { HomeComponent } from './pages/home/home.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${RoutesMap.home}`,
    pathMatch: 'full',
  },
  {
    path: `${RoutesMap.home}`,
    component: HomeComponent,
  },
  {
    path: `${RoutesMap.bookings}`,
    component: BookingsComponent,
  },
  {
    path: `${RoutesMap.newBooking}`,
    component: NewBookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

# HiringExerciseMain
This project was developed for Eli WMS hiring process as an assignment.

## Run the project
Run `npm install` to fetch and import all the dependencies used in this project then run `ng serve` for a dev server. Navigate to `http://localhost:4200/` for playing with that.

## About the project
This wep app try to emulate the mockup I have received.
### How it works
You will land to the home page where you can navigate throught the films with the arrows site on the bottom of the page. You can select one of that films by clicking on the film's poster.
###
Clicking to the "Prenota" button you will navigate into new-booking page where the booking process will shown. (all data are mocked)
###
At the end booking process or selecting the "Le mie prenotazioni" navigation button on the header, you will navigate to the "Le mie prenotazioni' page where you could see you tickets. (data are mocked)
### Explaining development process
In order to simulate a rest API call, instead of just copy the data from the json, I decided to create services which intercept jsons from the assets using rxjs.
###
I didn't import any external library except for rxjs. All the graphics are made just using HTML5 and SCSS.

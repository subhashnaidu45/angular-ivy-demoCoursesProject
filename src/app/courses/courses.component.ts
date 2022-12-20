import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  // interface Courses() []
  ngOnInit() {}
  Courses = [
    {
      id: 45,
      name: 'naa saavu nenu sastha neekendhuku',
      author: 'Dhoola',
      duration: '25',
      price: 45,
      rating: 3.5,
    },
    {
      id: 451,
      name: 'Multi Personality disorder',
      author: 'Ayyagaru',
      duration: '36',
      price: 55,
      rating: 5,
    },
    {
      id: 452,
      name: 'Retire @ 26',
      author: 'Mr Perfectionist',
      duration: '49',
      price: 0,
      rating: 1,
    },
    {
      id: 453,
      name: 'Lifelong Single',
      author: 'Subhash',
      duration: '64',
      price: 0,
      rating: 4,
    },
  ];
}

import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-classschedule',
  templateUrl: './classschedule.component.html',
  styleUrls: ['./classschedule.component.css']
})
export class ClassscheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

}

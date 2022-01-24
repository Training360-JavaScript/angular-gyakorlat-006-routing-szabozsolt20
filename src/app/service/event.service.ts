import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      {name: 'name', date: 'date', time: 'time', location: {address:'address', city: 'city', country:'country'} },
      {name: 'name', date: 'date', time: 'time', location: {address:'address', city: 'city', country:'country'} },
      {name: 'name', date: 'date', time: 'time', location: {address:'address', city: 'city', country:'country'} },
      {name: 'name', date: 'date', time: 'time', location: {address:'address', city: 'city', country:'country'} }
    ];
  }


}

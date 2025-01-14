import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: 'Shared data' | undefined;
  static data: string;
}
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  data!: string;

  constructor(private dataService: DataService) {
    this.dataService.data$.subscribe((value) => (this.data = value));
  }
  update() {
    this.dataService.updateData('Data updeted from first component');
  }
}

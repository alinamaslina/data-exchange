import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './binding/parent/parent.component';
import { FirstComponent as FistServiceExchange } from './service-exchange/first/first.component';
import { FirstComponent } from './observable/first/first.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent, FirstComponent, FistServiceExchange],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BorderNaimationComponent } from '../border-naimation/border-naimation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BorderNaimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'animation-practices';
}

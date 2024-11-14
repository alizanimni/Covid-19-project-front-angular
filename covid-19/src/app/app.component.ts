import { HeaderComponent } from './components/header/header.component';
import { Component , Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}
  isBackgroundDark: boolean = false;

  toggleBackgroundColor() {
    this.isBackgroundDark = !this.isBackgroundDark;
    console.log(this.isBackgroundDark);
    const body = document.getElementsByTagName('body')[0];
    if (this.isBackgroundDark) {
      // Set background color to dark
      this.renderer.setStyle(body, 'background-color', '#4B6170');
      this.renderer.setStyle(body, 'color', '#FFFFFF'); // Optionally change text color
    } else {
      // Set background color to light
      this.renderer.setStyle(body, 'background-color', 'rgb(248, 250, 253)');
      this.renderer.setStyle(body, 'color', '#233333'); // Optionally change text color
    }
    
  }
  title = 'covid-19';
}

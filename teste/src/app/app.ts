import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('teste');
   imagePath: string = 'assets/profile-pic.png';

  // If you need to change it later:
  changeImage() {
    this.imagePath = 'assets/new-pic.png';
  }
}

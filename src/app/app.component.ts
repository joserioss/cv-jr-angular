import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState = false;
  booleanQR = true;
  title = 'cv-jr-angular';

  mostrarQR(){
    this.booleanQR = !this.booleanQR;
  }
}

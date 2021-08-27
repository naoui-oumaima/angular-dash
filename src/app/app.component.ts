import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  settheme={dark:'',light:'none'};
  onChangeTheme = (dtheme) =>{
    this.settheme= dtheme;
    console.log(this.settheme)
  }
}

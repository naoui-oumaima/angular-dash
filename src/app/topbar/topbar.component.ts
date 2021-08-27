import { Component, Output, EventEmitter,HostBinding } from '@angular/core';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

@HostBinding ('class.navbar-opened') navbarOpened = false;

isCollapsed = true;

toggleNavbar () {
  this.navbarOpened=!this.navbarOpened;
      // ('class.collapse').;
      this.isCollapsed= !this.isCollapsed
}


light="none"
dark=""

@Output() dtheme = new EventEmitter();

public darktheme = () => {
  this.light='none';
  this.dark='';
  this.dtheme.emit({dark:'',light:'none'});
  document.documentElement.style.setProperty('--ecriture', '#fff');
  document.documentElement.style.setProperty('--background', '#202948');
  document.documentElement.style.setProperty('--sectionBackground', '#2c365e');
  document.documentElement.style.setProperty('--borderColor', '#585f76');
  document.documentElement.style.setProperty('--ThTable', '#141b32');
  document.documentElement.style.setProperty('--color1', '#fff');
  document.documentElement.style.setProperty('--btnColor1', '#463842');
  document.documentElement.style.setProperty('--btnColor2', '#253947');
  document.documentElement.style.setProperty('--btnColor3', '#2d3e4e');
  document.documentElement.style.setProperty('--pColor', '#a2a7b8');
  document.documentElement.style.setProperty('--Color2', '#fff');

}

public lighttheme = () => {
  this.light="";
  this.dark="none";
  this.dtheme.emit({dark:'none',light:''});
  document.documentElement.style.setProperty('--ecriture', '#262626');
  document.documentElement.style.setProperty('--background', '#f1f5f1');
  document.documentElement.style.setProperty('--sectionBackground', '#fff');
  document.documentElement.style.setProperty('--borderColor', '#dedede');
  document.documentElement.style.setProperty('--ThTable', '#d6ead9');
  document.documentElement.style.setProperty('--color1', '#3a7942');
  document.documentElement.style.setProperty('--btnColor1', '#fcf1e9');
  document.documentElement.style.setProperty('--btnColor2', '#dee8df');
  document.documentElement.style.setProperty('--btnColor3', '#d4e2d6');
  document.documentElement.style.setProperty('--pColor', '#848283');
  document.documentElement.style.setProperty('--Color2', '#7dae83');
}

// public showMenu = () => {
//   menu.show();
// }
}

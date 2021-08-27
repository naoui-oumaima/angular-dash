import { Component,Input} from '@angular/core';


@Component({
  selector: 'app-third-section',
  templateUrl: './thirdsection.component.html',
  styleUrls: ['./thirdsection.component.scss']
})
export class ThirdSectionComponent  {
  displayD=""
  displayW=""
  displayI=""

  public interestbtn = () => {
    this.displayD="none"
    this.displayW="none"
    this.displayI=""
  }

  public depositbtn = () => {
    this.displayI="none"
    this.displayW="none"
    this.displayD=""
  }

  public withdrawbtn = () => {
    this.displayD="none"
    this.displayI="none"
    this.displayW=""
  }

  public affall = () => {
    this.displayD=""
    this.displayW=""
    this.displayI=""
  }



@Input() dtheme : any;


// light="none";
// dark="";

// public theme = () => {
//   if (this.dtheme)  {
//     this.light="";
//     this.dark="none";
//   }
//   if (this.dtheme==false) {
//     this.light="none";
//     this.dark="";
//   }

}

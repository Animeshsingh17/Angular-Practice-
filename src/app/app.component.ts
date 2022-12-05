import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myOne';
  displayVal='';
  number=100;
  getName(name:string){
    console.log(name)
  }
  getData(box:string){
   console.log("This  keyup function is here ",box)
  }
  getData1(tox:any){
    console.log("This  focus function is here ",tox)
  }
  getNameP(box1:string){
    console.warn(box1)
    this.displayVal=box1
  }
  counter(type:string){
   type==='add' ? this.number++ : this.number--
  }
}

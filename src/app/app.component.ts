import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color = 'red';
  color1: string = 'green';
  users = ['Animesh', 'Peter', 'dube', 'akash', 'Aditya'];
  userDetails = [
    {
      name: 'Animesh',
      id: 1,
      email: 'animesh.singh170199@gmail.com',
      phone: +91 - 9521463259,
      socialaccount: ['fb', 'insta', 'twitter', 'linkdin'],
    },
    {
      name: 'Peter',
      id: 2,
      email: 'anpeter99@gmail.com',
      phone: +9259,
      socialaccount: ['fb', 'insta', 'twitter'],
    },
    {
      name: 'dube',
      id: 3,
      email: 'andube199@gmail.com',
      phone: +913259,
      socialaccount: ['fb', 'insta'],
    },
    {
      name: 'akash',
      id: 4,
      email: 'aniaka.si99@gmail.com',
      phone: +9159,
      socialaccount: ['twitter', 'linkdin'],
    },
  ];
  display = false;
  title = 'myOne';
  displayVal = '';
  number = 100;
  disable = true;
  show = true;
  userData: any = {};
  getName(name: string) {
    console.log(name);
  }
  getData(box: string) {
    console.log('This  keyup function is here ', box);
  }
  getData1(tox: any) {
    console.log('This  focus function is here ', tox);
  }
  getNameP(box1: string) {
    console.warn(box1);
    this.displayVal = box1;
  }
  counter(type: string) {
    type === 'add' ? this.number++ : this.number--;
  }
  updateColor(color1: string) {
    this.color1 = 'blue';
  }
  getFormData(data: NgForm) {
    console.log(data);
    this.userData = data;
    console.log(this.userData, 'hello data');
  }
  toggle() {
    this.display = !this.display;
  }
  page = 4;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  list:any[]=[]
  addTask(item:string){
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list)
  }
  removeTask(id:number){
   this.list=this.list.filter(item=>item.id!==id)
  }
  data=10;
  updateChild(){
    this.data=Math.floor(Math.random()*10)
  }
}

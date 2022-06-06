import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})





export class HomeComponent  {

  bgColor = "red";
  h = 50;
  w = 50;

  bgColor1 = "white";


  msg = "";


  // events method
  demo1(a:any){
    // this.name = a;
    this.bgColor = "blue";
    this.h = 300;
    this.w = 300;
    
  }

  demo2(){
    console.log("this is dblclick");
  }


  demo3(){
    this.bgColor1 = "green";
  }


  demo4(){
    this.bgColor1 = "blue";
  }


  demo5(){
    this.msg = "Text Copied";
  }

  demo10(){
    // console.log("hello");
    return false;
  }



}

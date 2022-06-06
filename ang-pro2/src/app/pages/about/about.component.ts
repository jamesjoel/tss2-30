import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  x = "password";
  msg = "Show";
  check = true;

  left = 0;
  top = 0;
  color = "000";

  demo(){

    if(this.check == true){

      this.x = "text";
      this.msg = "Hide";
      this.check = false;
    }else{
      this.x = "password";
      this.msg = "Show";
      this.check = true;
    }

  }

  demo2(){
    let x = Math.random()*800;
    let y = Math.floor(x);

    let a = Math.random()*600;
    let b = Math.floor(a);


    this.left = y;
    this.top = b;

    this.color = "";
    for(let i=1; i<=6; i++)
    {
      let m = Math.random()*9;
      let n = Math.floor(m);
      this.color += n;
    }
    
  }

}

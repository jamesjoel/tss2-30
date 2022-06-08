import { Component, OnInit } from '@angular/core';


interface MyObj{
  name : string|number,
  age : number,
  city : string,
  gender? : string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name:string = "rohit";

  obj:MyObj[]=[
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "amar",
      age : 23,
      city : "mumbai"
    },
    {
      name : "nidhi",
      age : 21,
      city : "pune"
    }
  ]

    color = ["red", "green", "blue"];

    a = "indore";
    b = 200;
    c = true;

    gender = "male";




  constructor() { }

  ngOnInit(): void {
  }


  demo(){
    console.log(this.name);
  }

}

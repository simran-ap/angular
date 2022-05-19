import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Simran';
  contacts = [
    {
       'name' : 'ABC',
       'id' : 123456789,
       'city' : 'Rampur'
    },
    {
      'name' : 'XYZ',
       'id' : 123456789,
       'city' : 'Shimla'
    },
    {
      'name' : 'XYZ',
       'id' : 123456789,
       'city' : 'Shimla'
    },
    {
      'name' : 'XYZ',
       'id' : 123456789,
       'city' : 'Shimla'
    },
    {
      'name' : 'XYZ',
       'id' : 123456789,
       'city' : 'Shimla'
    },
    {
      'name' : 'XYZ',
       'id' : 123456789,
       'city' : 'Shimla'
    },
    {
      'name' : 'XYZ',
       'id' : 123456789,
       'city' : 'Shimla'
    },
    {
      'name' : 'XYZ',
       'id' : 123456789,
       'city' : 'Shimla'
    },
    {
      'name' : 'XYZ',
       'id' : 123456789,
       'city' : 'Shimla'
    }
   
  ]
  userLoggedIn = true;
  color = 'yellow';
  clickFunction() {
    console.log("hello, you clicked the button :)")
  }
  hoverFunction() {
    console.log("hello, you just hovered me :)")
  }

 username = ""
 lowerText = "I AM SIMRAN SINGLA"
 upperText = "i am simran singla"
 dateToday = Date.now()
 curr = 100
 percentVal = 0.292929
}

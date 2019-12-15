import { Component } from '@angular/core';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../odd/odd.component';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  listOfComp: any = [];
  interval = 0;
  x: number;
 newNum() {
   this.x = Math.floor(Math.random() * 10);
   console.log(this.x);
   this.listOfComp.push(this.x);
 }


  onStart() {
    this.interval = setInterval(() => {this.newNum(); }, 1000);

  }
  onStop() {
    clearInterval(this.interval);
    console.table(this.listOfComp)
 }

}

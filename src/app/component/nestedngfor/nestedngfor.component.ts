import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedngfor',
  templateUrl: './nestedngfor.component.html',
  styleUrls: ['./nestedngfor.component.css']
})
export class NestedngforComponent {

  y=[
    {
      name:'vamsi',
      age:'22',
      place:'vizag'
    },
    {
      name:'chiru',
      age:'22',
      place:'sabbavaram'
    }
  ]

}

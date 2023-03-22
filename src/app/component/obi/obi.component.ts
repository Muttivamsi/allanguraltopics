import { Component } from '@angular/core';

@Component({
  selector: 'app-obi',
  templateUrl: './obi.component.html',
  styleUrls: ['./obi.component.css']
})
export class ObiComponent {

  required=true;
  x={
    vamsi:this.required,
    chiru:this.required
  }

}

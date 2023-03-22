import { Component } from '@angular/core';

@Component({
  selector: 'app-double-cb',
  templateUrl: './double-cb.component.html',
  styleUrls: ['./double-cb.component.css']
})
export class DoubleCBComponent {

required=true;
dcb={
  vamsi:this.required,
  chiru:this.required
}

}

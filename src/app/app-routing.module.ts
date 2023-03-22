import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './component/interpolation/interpolation.component';
import { ClassbindingComponent } from './component/classbinding/classbinding.component';
import { DoubleCBComponent } from './component/double-cb/double-cb.component';
import { Stylebinding1Component } from './component/stylebinding/stylebinding.component';
import { Stylebinding2Component } from './component/stylebinding2/stylebinding2.component';
import { EventbindingComponent } from './component/eventbinding/eventbinding.component';
import { ObiComponent } from './component/obi/obi.component';
import { NgtdbComponent } from './component/ngtdb/ngtdb.component';
import { NgifComponent } from './component/ngif/ngif.component';
import { NgswitchcaseComponent } from './component/ngswitchcase/ngswitchcase.component';
import { NgforComponent } from './component/ngfor/ngfor.component';
import { NgforobectComponent } from './component/ngforobect/ngforobect.component';
import { NestedngforComponent } from './component/nestedngfor/nestedngfor.component';

const routes: Routes = [
  {
    path:'Interpolation',
    component: InterpolationComponent
  },
  {
    path:'Classbinding',
    component:ClassbindingComponent
  },
  {
    path:'DoubleCB',
    component:DoubleCBComponent
  },
  {
    path:'Stylebinding',
    component:Stylebinding1Component
  },
  {
  path:'Stylebinding2',
  component:Stylebinding2Component
},
{
  path:'Eventbinding',
  component:EventbindingComponent
},
{
  path:'Obi',
  component:ObiComponent
},
{
  path:'Ngtdb',
  component:NgtdbComponent
},
{
  path:'Ngif',
  component:NgifComponent
},
{
  path:'Ngswitchcase',
  component:NgswitchcaseComponent
},
{
  path:'Ngfor',
  component:NgforComponent
},
{
  path:'Ngforobect',
  component:NgforobectComponent
},  
{
  path:'Nestedngfor',
  component:NestedngforComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

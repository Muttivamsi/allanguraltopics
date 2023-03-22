import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
import { NgforobectComponent } from './component/ngforobect/ngforobect.component';
import { NgforComponent } from './component/ngfor/ngfor.component';
import { NestedngforComponent } from './component/nestedngfor/nestedngfor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ClassbindingComponent,
    DoubleCBComponent,
    Stylebinding1Component,
    Stylebinding2Component,
    EventbindingComponent,
    ObiComponent,
    NgtdbComponent,
    NgifComponent,
    NgswitchcaseComponent,
    NgforobectComponent,
    NgforComponent,
    NestedngforComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

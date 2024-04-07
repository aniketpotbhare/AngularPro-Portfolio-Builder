import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioProComponent } from './portfolio-pro/portfolio-pro.component';

import { jsPDF} from 'jspdf';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioProComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    
   
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

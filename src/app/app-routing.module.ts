import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioProComponent } from './portfolio-pro/portfolio-pro.component';

const routes: Routes = [
  // { path: '**', component: PortfolioProComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

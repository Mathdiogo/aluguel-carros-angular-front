import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOmeComponent } from './home/home.component';
import { ReserveComponent } from './reserve/reserve.component';

const routes: Routes = [
{path: 'home', component: HOmeComponent }, 
{path: 'alugar', component: ReserveComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

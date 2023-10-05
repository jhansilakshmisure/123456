import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent }from './insert/insert.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { MainComponent } from './main/main.component';
import { DoctorinsertComponent } from './doctorinsert/doctorinsert.component';
import { AboutComponent } from './about/about.component';
import { GuideComponent } from './guide/guide.component';
import { DreadComponent } from './dread/dread.component';
const routes: Routes =[
  {
    path:"insert",
    component: InsertComponent
  },
  {
    path:"read",
    component:ReadComponent
  },
  {
    path:"delete",
    component: DeleteComponent
  },
  {
    path:"update",
    component:UpdateComponent
  },
 
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"homelogin",
    component:HomeloginComponent
  },
  {
    path:"main",
    component:MainComponent
  },
{
    path:"doctorinsert",
    component:DoctorinsertComponent

  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"guide",
    component:GuideComponent
  },
  {
    path:"dread",
    component:DreadComponent
  }

  
  
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

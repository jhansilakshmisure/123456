import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertComponent } from './insert/insert.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


import { DoctorinsertComponent } from './doctorinsert/doctorinsert.component';
import { AboutComponent } from './about/about.component';
import { GuideComponent } from './guide/guide.component'
import { ReactiveFormsModule } from '@angular/forms';
import { DreadComponent } from './dread/dread.component';


@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    ReadComponent,
    DeleteComponent,
    UpdateComponent,
    
    LoginComponent,
    RegisterComponent,
    HomeloginComponent,
    MainComponent,
   
    
    DoctorinsertComponent,
    AboutComponent,
    GuideComponent,
    DreadComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule ,
    RouterModule,
    RouterModule.forRoot([
      
        {path:'',redirectTo:'/homelogin',pathMatch:'full'},
      
    ]),

    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

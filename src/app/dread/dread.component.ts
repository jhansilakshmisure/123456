import { Component,OnInit } from '@angular/core';
import { Read, Doctor } from '../scanning';
import { DoccrudService } from '../doccrud.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dread',
  templateUrl: './dread.component.html',
  styleUrls: ['./dread.component.css']
})
export class DreadComponent implements OnInit {

  ngOnInit(): void {
    this.Read('');
  }
  constructor(private Service: DoccrudService,private router:Router,private location: Location) {}
  Roll: String = '';
  GotResult: Boolean = false;
  Results2=[];
  a=[];
  id_no:string=''
  
  UpdatedUser: Doctor = {
    id_no:'',
    name:'',
    phone_number:'',
    age:'',
    experience:'',
    
    

  };
  Results = [];
  Read1(Roll: String) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results2= Data.Result;
        for(let i=0;i<this.Results2.length;i++){
          this.a=this.Results2[i];
        }
        console.log(this.a);
        this.UpdatedUser={
          id_no:this.a[0],
          name:this.a[1],
          phone_number:this.a[2],
          age:this.a[3],
          experience:this.a[4],
          
        }
        console.log(this.UpdatedUser);
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
}

Read(Roll: String) {
  this.Service.Read(Roll).subscribe({
    next: (Data: Read) => {
      this.Results = Data.Result;
      // this.UpdatedUser={
      //   s_no:this.Results[0],
      //   name:this.Results[1],
      //   contact_no:this.Results[2],
      //   no_of_people:this.Results[3],
      //   head:this.Results[4],
      //   location:this.Results[5],
      //   mail:this.Results[6]
      // }
      this.GotResult = true;
    },
    error: (Err:any) => {
      console.log(Err);
    },
  });
}
Update(id_no: String, Details: Doctor) {
  this.Service.Update(this.UpdatedUser.id_no, Details).subscribe({
    next: (Data:any) => {
      console.log(Data);
      
    },
    error: (err:any) => {
      console.log(err);
    },
  });
}
Delete(Roll: String) {


    
  this.Service.Delete(Roll).subscribe({
    next: (Data:any) => {
      console.log(Data.rowsAffected);
      this.Read('All');
    },
    error: (Error:any) => {
      console.log(Error);
    },
  });
}

onLogout(){
  this.router.navigateByUrl('/homelogin');
}
}
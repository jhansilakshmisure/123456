

import { Component,OnInit } from '@angular/core';
import { CRUDService } from '../crud.service';
import { InsertedSuccess, Read, Scanning } from '../scanning';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit  {
  
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: CRUDService,private router:Router) {}
  Roll: String = '';
  GotResult: Boolean = false;
 
  Results = [];
  Read(Roll: String) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  
  
  Delete(Roll: String) {
    this.Service.Delete(Roll).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }
  



  onLogout(){
    this.router.navigateByUrl('/homelogin');
  }  
}
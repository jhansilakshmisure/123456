
import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../crud.service';
import { InsertedSuccess, Read, Scanning } from '../scanning';
import { Router } from '@angular/router';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('');
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
  onLogout(){
    this.router.navigateByUrl('/homelogin');
  }
 
}
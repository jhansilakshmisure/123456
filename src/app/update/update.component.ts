
import { Component,OnInit } from '@angular/core';
import { CRUDService } from '../crud.service';
import { Subscription } from 'rxjs';

import { InsertedSuccess, Read, Scanning,UniqueConstraintError,} from '../scanning';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})




export class UpdateComponent implements OnInit {
  ngOnInit(): void {}
  Subscription: Subscription = new Subscription();
  constructor(private Service: CRUDService,private router:Router) {}
  Roll: String = '';
  GotResult: Boolean = false;
  UpdatedUser: Scanning = {
    s_no : '',
    name: '',
    age: '',
    gender: '',
    dd: '',
    count_of_patient: '',
    
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Results = [];
  Read(Roll: String) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err:any) => {
        console.log(Err);
      },
    });
  }
  Update(s_no: String, Details: Scanning) {
    this.Service.Update(s_no, Details).subscribe({
      next: (Data:any) => {
        console.log(Data);
        
      },
      error: (err:any) => {
        console.log(err);
      },
    });
  }
onLogout(){
  this.router.navigateByUrl('/homelogin');
}
 


}

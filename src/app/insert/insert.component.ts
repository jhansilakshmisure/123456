
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  Scanning,
  UniqueConstraintError,
} from '../scanning';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent implements OnInit, OnDestroy {
  constructor(private Service: CRUDService,private router:Router) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Scanning = {
    s_no: '',
    name: '',
    age: '',
    gender:'',
    dd:'',
    count_of_patient:'',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }

    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.s_no} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.s_no} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  } 
 



  onLogout(){
    this.router.navigateByUrl('/homelogin');
  }
}

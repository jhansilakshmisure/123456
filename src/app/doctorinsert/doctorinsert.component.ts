import { Component } from '@angular/core';
import{
  InsertedSuccess,
  Doctor,
  UniqueConstraintError,

}
 from '../scanning';
import { Subscription } from 'rxjs';
import { DoccrudService} from '../doccrud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctorinsert',
  templateUrl: './doctorinsert.component.html',
  styleUrls: ['./doctorinsert.component.css']
})
export class DoctorinsertComponent {
  constructor(private Service: DoccrudService,private router:Router) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Doctor = {
    id_no: '',
    name: '',
    phone_number: '',
    age:'',
    experience:'',
    
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
          this.ErrorMsg = `${this.User.id_no} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.id_no} Inserted Succesfully`;
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






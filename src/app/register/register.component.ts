import { Component,OnInit, OnDestroy } from '@angular/core';
import{
  InsertedSuccess,
  Register,
  UniqueConstraintError,

}

 from '../scanning';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegcrudService} from '../regcrud.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private Service: RegcrudService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User: Register = {
  
    name: '',
    phone_number: '',
    email:'',
    password:'',
    confirm_password:'',
  };
  SuccessMsg = '';
  ErrorMsg = '';
  Register() {
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
          this.ErrorMsg = `${this.User.name} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.name} Inserted Succesfully`;
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
  RegForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
  })
  ReginUser()
  {
    console.warn(this.RegForm.value)
  }
get user()
{
  return this.RegForm.get('user');
}
get password()
{
  return this.RegForm.get('password');
}
}




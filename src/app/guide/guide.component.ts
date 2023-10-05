import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
  constructor(private router:Router){}



  onLogout(){
    this.router.navigateByUrl('/homelogin');
  }
}

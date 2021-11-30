import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder} from '@angular/forms';
import { UserInfoService } from '../Service/userinfo.service';

interface salutation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  
export class RegisterComponent implements OnInit {
  userInfo!: FormGroup;

  salutationList: salutation[] = [
    {value: 'prof-0', viewValue: 'Prof'},
    {value: 'mr-1', viewValue: 'Mr'},
    {value: 'ms-2', viewValue: 'Ms'},
    {value: 'mrs-3', viewValue: 'Mrs'},
    {value: 'dr-4', viewValue: 'Dr'},
  ]
  sponsorList: string[] = ['Misson', 'Divatorate', 'Division']

  isLinear = false;

  constructor(private infoSerivce: UserInfoService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.userInfo = new FormGroup({
      full_name: new FormControl('', [Validators.required, Validators.maxLength(16)]),
  
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  
      username: new FormControl('', [Validators.required, Validators.maxLength(16)]),

      passwd: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(16)]),
    });

    this.infoSerivce.find().subscribe(response => {
      console.log(response);
    });
  }

validate(){
  let fm=this.userInfo;
  console.info(fm);
}

 get full_name(){
   return this.userInfo.get('full_name');
 }

get email(){
  return this.userInfo.get('email');
}

get phone(){
  return this.userInfo.get('phone');
}

get username(){
  return this.userInfo.get('username');
}


get passwd(){
  return this.userInfo.get('passwd');
}

submit(){
  this.infoSerivce.post('/register', this.userInfo.value).subscribe(result => {
    console.log('Results: ');
    console.log(result);
  });
}

}

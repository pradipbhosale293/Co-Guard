import { Component, OnInit } from '@angular/core';
import { CoGuardService } from 'src/app/co-guard.service';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {
  photoIds:any=['Aadhaar Card','Driving License','PAN Card','Passport','Passport','Voter ID']
  onClickOpen:any= true;

  OnclickOpenSingUp:any= false;
  onclickadd:any=false
  constructor(private mySer:CoGuardService) { }
public MoNo:any;
public txnId:any;
public otp:any;
  ngOnInit(): void {
  }
  getOtp(){
    this.onClickOpen=false;
    this.OnclickOpenSingUp=true;
    this.onclickadd=false
    console.log(this.MoNo)
    this.mySer.getOtp(this.MoNo).subscribe((res)=>{
      console.log(res);
      let data:any = res;
      console.log(data.txnId);
      this.txnId= data.txnId
    });
  }
  confirmOtp(){
    this.OnclickOpenSingUp=false;
    this.onClickOpen=false;
    this.onclickadd=true
    console.log(this.otp);
    this.otp = this.otp.toString();
    let requestData ={
      "otp":this.otp,
      "txnId":this.txnId
    }
    this.mySer.confirmOtp(requestData).subscribe((res)=>{
    console.log(res)
     });
  }
  add(){
    this.OnclickOpenSingUp=false;
    this.onClickOpen=true;
    this.onclickadd=false
    console.log('Adding')
  }
}

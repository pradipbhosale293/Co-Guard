import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vacinator',
  templateUrl: './vacinator.component.html',
  styleUrls: ['./vacinator.component.css']
})
export class VacinatorComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  userform:any;
  isSubmitted:boolean=false;
  ngOnInit(): void {
    this.userform=this.fb.group({
      MoNo:['',[Validators.required]],
      pass:['',[Validators.required]]
    })
  }
  onSubmitForm(){
    console.log(this.userform);
    console.log(this.userform.value);
    this.isSubmitted=true
  }
  get f(){
    return this.userform.controls
  }
  getOTP(){
    console.log('call to otp')
  }
}

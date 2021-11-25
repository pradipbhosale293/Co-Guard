import { Component, OnInit } from '@angular/core';
import { CoGuardService } from 'src/app/co-guard.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  registrationToday:number= 152899;
  vacinationToday:number=4725369;
  PartiallyVaccinatedToday:number=1319470;
  FullyVaccinatedToday:number=3423659;
  data:any;

  public UserState:any;

  public selectedState:any;
 
  
  public userDistrict:any;
  public selectedDistrict:any;


  // public finalData:any;
  
  constructor(private mySer:CoGuardService) { 
    this.getState()
    this.getDistrict;
  }

  ngOnInit(): void {
  }
  getState(){

    this.mySer.getState().subscribe((res)=>{
      // console.log(res);
      this.UserState=res;
      this.UserState=this.UserState.states;
      // console.log(this.UserState);
    })
  }
  onStateSelect(ev:any){
    this.getDistrict(this.selectedState);
    

    

  }
  getDistrict(state_id:any){
  this.mySer.getDistrict(state_id).subscribe((res)=>{
    this.userDistrict=res;
    this.userDistrict=this.userDistrict.districts;
     console.log(this.userDistrict);
  })
  }

}

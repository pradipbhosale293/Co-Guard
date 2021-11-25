import { Component, OnInit } from '@angular/core';
import {  CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';

import { CoGuardService } from 'src/app/co-guard.service';

schemas: [ CUSTOM_ELEMENTS_SCHEMA ];
schemas: [ NO_ERRORS_SCHEMA ];

@Component({
  selector: 'app-search-vacination',
  templateUrl: './search-vacination.component.html',
  styleUrls: ['./search-vacination.component.css']
})
export class SearchVacinationComponent implements OnInit {

  data:any;

  public UserState:any;

  public selectedState:any;
 
  
  public userDistrict:any;
  public selectedDistrict:any

  // public finalData:any;
  
  constructor(private mySer:CoGuardService ) { 
    this.getState()
    this.getDistrict;
  }
  
  ngOnInit() {

  }
  // GetState(){
    
  //   this.apiSer.GetState().subscribe(sub=>{
  //     // console.log(sub)
  //     this.UserState=sub;
  //     this.UserState=this.UserState.states
  //     // console.log(this.UserState)
  //   })
  // }

  // getDistrict(state_id:any){
   
  //   this.apiSer.getDistrict(state_id).subscribe(res=>{
  //     console.log(res)
  //     this.UserDistrict=res
  //     this.UserDistrict=this.UserDistrict.districts
  //     // console.warn(this.UserDistrict)
  //   })
  // } 

  // // search data
  // //  getSearchData(district_id:any){
  // //   this.apiSer.getSearchData(district_id).subscribe(fn=>{
  // //     console.warn(fn)
  // //     this.finalData=fn
  // //     // this.finalData=this.finalData
  // //     console.warn(this.finalData)
  // //   })
  // //   // this.finalData=this.UserDistrict
  // //   // console.log(this.finalData)
  // // }



  // onStateSelect(ev:any){
  //   // console.log(this.selectedState.state_id)
  //   let stateName= ev.target.value
  //   var state=this.UserState.filter(function (el:any){
  //     return el.state_name==stateName;
  //   })
  //   let state_id=state[0].state_id;
  //   this.getDistrict(state_id)   
  // }   

  // onDistrictSelect(dt:any){
  //   let districtName=dt.target.value
  //   var district=this.UserDistrict.filter(function (dt:any){
  //     return dt.district_name==districtName
  //   })
  //   let district_id=district[0].district_id;
  //   console.log(district_id)
  // }

  // // onSearchData(sm:any){
  // //   let dataName=sm.target.value
  // //   var sumData=this.finalData.filter(function (sm:any){
  // //     return sm.district_name=dataName
  // //   })
  // //   console.warn(sumData)
  // // }
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
  


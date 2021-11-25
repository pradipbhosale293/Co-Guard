import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoGuardService {

  constructor(private http:HttpClient) { }
  getOtp(MoNo:any){
    let requestData={
      "mobile":MoNo
    }
    return this.http.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', requestData )
  }
  confirmOtp(requestData:any){
    return this.http.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP', requestData )
    // https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP
  }
  getState(){
    return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
  }

  getDistrict(state_id:any){
    let url='https://cdn-api.co-vin.in/api/v2/admin/location/districts/' +state_id;
     return this.http.get(url);
  }

  getSearchData(district_id:any){
  let url='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512'+district_id;
    return this.http.post(url,district_id)
  }

 
}



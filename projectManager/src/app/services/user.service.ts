import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isLoggedIn: boolean = false;

  isSaveOnStorage(){
      let result = localStorage.getItem('isLogin')
       result != null && result == 'Yes'
   }

  loginUser(userName:string, password:string){
    this.isLoggedIn = userName == "user1" && password=="123";

    localStorage.setItem('isLogin',this.isLoggedIn ? "Yes":"No");
  }
}

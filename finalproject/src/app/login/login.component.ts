import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UsersList:any;
  constructor(private as:LoginService,private fb:FormBuilder, private router:Router){

  // validations
  this.signupform = this.fb.group({
    email:['',[Validators.required, Validators.pattern("^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
    username: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^[a-z0-9]+$")]],
    password: ['', [Validators.required, Validators.minLength(6),Validators.pattern("^[0-9]{6,6}")]]
  });

  //storing list of users

  this.as.getUsersList().subscribe({

    next:(data:any)=>{
      this.UsersList=data;
      this.existinguser()
    },

    error:()=>this.UsersList=[]
  })

}

  signin:boolean=true; //currently login form
  signup:boolean=false;
  login(){
    this.signin=true;
    this.signup=false;
  }

  register(){
    this.signin=false; //login hides, signup form displays
    this.signup=true;
  }
  email: any;
  password: any;
  userfound:boolean=false;
  usertype:any;
  error:any;
  existinguser(){
    this.error=[];
    //checks for empty fields
    if(this.email==undefined||this.password==undefined){
      this.error.push("Please fill out all the fields")}
    else{//verifying login credentials
      for (let user of this.UsersList) {
        if(user.email==this.email&&user.password==this.password){
          this.usertype=user.type;
          alert("You are logged in");
          this.userfound=true
        }
      }//according to the type of user, routing happens
      if(this.userfound==true){
        if(this.usertype=="user"){
          this.router.navigate(['user'])
        }
        else{
          this.router.navigate(['admin'])
        }
      }
      else{
        //if login credentials is not found
        this.error.push("Incorrect username or password")
      }
    }
  }
  signupform:any;
  existing:any;
  newuser(){
    if (this.signupform.valid){
      //checking if this email id is already an user
      for(let x of this.UsersList){
        if(x.email==this.signupform.value.email){
          this.existing=true;
          if(this.existing!=true){
            var data={
              email: this.signupform.value.email,
              username: this.signupform.value.username,
              password: this.signupform.value.password,
              type: "user"
            }
            this.as.newuser(data).subscribe({
              next: (data:any)=>{
                alert("Welcome to Love and Knots!!")
                location.reload()
              },
              error:()=>{
                alert("Some error")
                location.reload()
              }
            }
            )
          }
        }
      }
    }
  }
}

import { Component } from '@angular/core';
import { ComplaintsService } from 'src/app/services/complaints.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  fname:any;
  lname:any;
  email:any;
  message:any;
  errors:string[]=[];
  constructor(private hs:ComplaintsService) { }

  ngOnInit(): void {
  }

  submit(){
    this.errors = []
   
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    if(this.lname==undefined || this.lname.length<3)
      this.errors.push("Lastname name should be greate than 3 characters")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    if(this.message==undefined || this.message.length<30)
      this.errors.push("Message should be greate than 30 characters")

      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          message: this.message

        }
        this.hs.postComplaints(obj).subscribe({
          next: ()=>{
            alert("You complaint is posted")
            this.fname="",
            this.lname="",
            this.email="",
            this.message=""
          },
          error: ()=>alert("there is a problem posting your complaint")
        }
        )
      }
  }
}

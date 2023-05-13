import { Component } from '@angular/core';
import { ReviewService } from 'src/app/user/services/review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  fname:any;
  lname:any;
  review:any;
  errors:string[]=[];
  constructor(private rs:ReviewService) { 
    this.rs.getReview().subscribe(
      {
          next : (data:any)=> this.review =data
      }
   )
  }

  ngOnInit(): void {
  }

  submit(){
    this.errors = []
   
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    if(this.lname==undefined || this.lname.length<3)
      this.errors.push("Lastname name should be greate than 3 characters")


      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          fname: this.fname,
          lname: this.lname,
          review: this.review

        }
        this.rs.postReview(obj).subscribe({
          next: ()=>{
            alert("Your review is posted")
            this.fname="",
            this.lname="",
            this.review=""
          },
          error: ()=>alert("there is a problem posting your equiry")
        }
        )
      }
  }
}

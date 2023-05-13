import { Component } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  fname:any;
  lname:any;
  review:any;
  errors:string[]=[];
  constructor(private fs:FeedbackService) { 
    this.fs.getFeedback().subscribe(
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
        this.fs.postFeedback(obj).subscribe({
          next: ()=>{
            alert("Your question is posted")
            this.fname="",
            this.lname="",
            this.review=""
          },
          error: ()=>alert("there is a problem posting your feedback")
        }
        )
      }
  }
}

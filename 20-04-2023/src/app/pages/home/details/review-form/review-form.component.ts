import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReviewFormService } from 'src/app/services/review-form.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  @Input ()products:any;
  ReviewForm:any;
  

  types:string[]=[
    "All",
    "electronics",
    "beauty",
    "books",
    "sports"
  ]
  
  constructor(private fb:FormBuilder,private fs:ReviewFormService){
    this.ReviewForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      message:['',[Validators.required,Validators.minLength(15)]],
           
      type:['All']
    });
  }
  

  saveReview(){

    var temp:any={
      
      name: this.ReviewForm.value.name,
      message:this.ReviewForm.value.message
    }
    this.fs.postReview(temp).subscribe(
      
     { 
      next: data=>{
        alert('Your Review is saved')
        location.reload();
      },
      error:(error)=>alert('Not saved ---some Error')
    }

    )

  }
}

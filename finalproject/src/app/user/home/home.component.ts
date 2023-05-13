import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private http:HttpClient){}
  images = [
    'http://localhost/wedding1.jpg',
    'http://localhost/wed3.jpg',
    'http://localhost/wed2.jpg'
  ];
  currentSlide = 0;

  ngOnInit() {
    setInterval(() => {
      this.showSlide();
    }, 3000);
  }

  showSlide() {
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>;
    const dots = document.querySelectorAll('.dot') as NodeListOf<HTMLElement>;
    slides[this.currentSlide].style.opacity = '0';
    dots[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide + 1) % slides.length;
    slides[this.currentSlide].style.opacity = '1';
    dots[this.currentSlide].classList.add('active');
  }

}

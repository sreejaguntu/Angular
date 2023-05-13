import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsBoxComponent } from './destinations-box.component';

describe('DestinationsBoxComponent', () => {
  let component: DestinationsBoxComponent;
  let fixture: ComponentFixture<DestinationsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

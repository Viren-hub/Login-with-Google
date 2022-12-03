import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleImgComponent } from './google-img.component';

describe('GoogleImgComponent', () => {
  let component: GoogleImgComponent;
  let fixture: ComponentFixture<GoogleImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

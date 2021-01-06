import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviedetailComponent } from './moviedetail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoviedetailComponent', () => {
  let component: MoviedetailComponent;
  let fixture: ComponentFixture<MoviedetailComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedetailComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
      expect(component).toBeTruthy();
  });
});

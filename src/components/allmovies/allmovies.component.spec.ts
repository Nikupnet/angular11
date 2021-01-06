import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllmoviesComponent } from './allmovies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AllmoviesComponent', () => {
  let component: AllmoviesComponent;
  let fixture: ComponentFixture<AllmoviesComponent>;

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ AllmoviesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

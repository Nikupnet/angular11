import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopmoviesComponent } from './popmovies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PopmoviesComponent', () => {
  let component: PopmoviesComponent;
  let fixture: ComponentFixture<PopmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopmoviesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

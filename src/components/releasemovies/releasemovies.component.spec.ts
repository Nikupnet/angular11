import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReleasemoviesComponent } from './releasemovies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReleasemoviesComponent', () => {
  let component: ReleasemoviesComponent;
  let fixture: ComponentFixture<ReleasemoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasemoviesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchmoviesComponent } from './searchmovies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchmoviesComponent', () => {
  let component: SearchmoviesComponent;
  let fixture: ComponentFixture<SearchmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchmoviesComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavmoviesComponent } from './favmovies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FavmoviesComponent', () => {
  let component: FavmoviesComponent;
  let fixture: ComponentFixture<FavmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavmoviesComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

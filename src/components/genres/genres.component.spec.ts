import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenresComponent } from './genres.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ GenresComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

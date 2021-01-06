import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BestmoviesComponent } from './bestmovies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('BestmoviesComponent', () => {
  let component: BestmoviesComponent;
  let fixture: ComponentFixture<BestmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestmoviesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

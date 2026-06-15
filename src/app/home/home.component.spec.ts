import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all sub-components', () => {
    const nav = fixture.nativeElement.querySelector('app-nav');
    const hero = fixture.nativeElement.querySelector('app-hero');
    const footer = fixture.nativeElement.querySelector('app-footer');
    expect(nav).toBeTruthy();
    expect(hero).toBeTruthy();
    expect(footer).toBeTruthy();
  });
});

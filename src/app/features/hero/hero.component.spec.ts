import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all KPI items', () => {
    const kpis = fixture.nativeElement.querySelectorAll('.kpi');
    expect(kpis.length).toBe(4);
  });

  it('should have data-testid on badge', () => {
    const badge = fixture.nativeElement.querySelector('[data-testid="hero-badge"]');
    expect(badge).toBeTruthy();
  });

  it('should set elapsedTime matching YYYY-MM-DD HH:mm:ss format', () => {
    expect(component.elapsedTime).toMatch(/^\d{2}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });

  it('should render elapsedTime in the template in the correct format', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('[data-testid="hero-kpi-YEARS"] .kn span');
    expect(el).toBeTruthy();
    expect(el.textContent).toMatch(/^\d{2}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });
});

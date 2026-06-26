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

  it('should calculate years counter greater than 0', () => {
    expect(component.yearsCounter).toBeGreaterThan(0);
  });

  it('should render years counter in the template', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('[data-testid="hero-kpi-YEARS"] .kn span');
    expect(el).toBeTruthy();
    expect(parseFloat(el.textContent ?? '0')).toBeGreaterThan(4);
  });
});

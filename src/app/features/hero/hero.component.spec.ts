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

  it('should have yearsExp as a positive integer', () => {
    expect(component.yearsExp).toBeGreaterThanOrEqual(0);
    expect(Number.isInteger(component.yearsExp)).toBeTrue();
  });

  it('should render yearsExp with <em>+</em> in the template', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('[data-testid="hero-kpi-YEARS"] .kn');
    expect(el).toBeTruthy();
    expect(el.innerHTML).toMatch(/^\d+<em>\+<\/em>$/);
  });
});

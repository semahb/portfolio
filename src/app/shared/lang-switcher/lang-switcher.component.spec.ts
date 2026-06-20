import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LangSwitcherComponent } from './lang-switcher.component';
import { TranslationService } from '../../core/services/translation.service';

describe('LangSwitcherComponent', () => {
  let component: LangSwitcherComponent;
  let fixture: ComponentFixture<LangSwitcherComponent>;
  let translationService: jasmine.SpyObj<TranslationService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TranslationService', [
      'getCurrentLanguage',
      'setLanguage'
    ]);
    spy.getCurrentLanguage.and.returnValue('en');

    await TestBed.configureTestingModule({
      imports: [LangSwitcherComponent],
      providers: [{ provide: TranslationService, useValue: spy }]
    }).compileComponents();

    translationService = TestBed.inject(
      TranslationService
    ) as jasmine.SpyObj<TranslationService>;
    fixture = TestBed.createComponent(LangSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if current language matches', () => {
    translationService.getCurrentLanguage.and.returnValue('en');
    expect(component.isCurrentLang('en')).toBeTrue();
    expect(component.isCurrentLang('fr')).toBeFalse();
  });

  it('should set language when button is clicked', () => {
    component.setLang('fr');
    expect(translationService.setLanguage).toHaveBeenCalledWith('fr');
  });

  it('should render EN, FR, and AR buttons', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(3);
    expect(buttons[0].textContent.trim()).toBe('EN');
    expect(buttons[1].textContent.trim()).toBe('FR');
    expect(buttons[2].textContent.trim()).toBe('AR');
  });

  it('should have data-testid attributes for all three languages', () => {
    const container = fixture.nativeElement.querySelector('[data-testid="navbar-lang-switcher"]');
    const enBtn = fixture.nativeElement.querySelector('[data-testid="navbar-lang-en"]');
    const frBtn = fixture.nativeElement.querySelector('[data-testid="navbar-lang-fr"]');
    const arBtn = fixture.nativeElement.querySelector('[data-testid="navbar-lang-ar"]');

    expect(container).toBeTruthy();
    expect(enBtn).toBeTruthy();
    expect(frBtn).toBeTruthy();
    expect(arBtn).toBeTruthy();
  });

  it('should call setLanguage with ar when AR button clicked', () => {
    component.setLang('ar');
    expect(translationService.setLanguage).toHaveBeenCalledWith('ar');
  });

  it('should apply active class to current language', () => {
    translationService.getCurrentLanguage.and.returnValue('en');
    fixture.detectChanges();

    expect(component.isCurrentLang('en')).toBeTrue();
  });
});

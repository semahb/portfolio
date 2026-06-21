import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { Signal, signal } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { TranslationService } from '../../core/services/translation.service';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    const currentLanguage = signal('en');
    const translationServiceMock = {
      currentLanguage: currentLanguage as Signal<string>,
      getCurrentLanguage: () => currentLanguage(),
      setLanguage: (lang: string) => currentLanguage.set(lang),
      getSupportedLanguages: () => ['en', 'fr', 'ar']
    };
    const translateServiceMock = jasmine.createSpyObj('TranslateService', ['use', 'get', 'instant', 'set', 'reloadLang', 'resetLang', 'getBrowserLang', 'getDefaultLang', 'getCurrentLang', 'translate']);
    translateServiceMock.translate.and.returnValue(signal(''));

    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [
        { provide: TranslationService, useValue: translationServiceMock },
        { provide: TranslateService, useValue: translateServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all skill groups', () => {
    const groups = fixture.nativeElement.querySelectorAll('.skg');
    expect(groups.length).toBe(4);
  });

  it('should display all proficiency items', () => {
    const items = fixture.nativeElement.querySelectorAll('.prof-list > div');
    expect(items.length).toBe(6);
  });

  it('should display all language cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.lcard');
    expect(cards.length).toBe(3);
  });
});

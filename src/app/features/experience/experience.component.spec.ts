import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ExperienceComponent } from './experience.component';
import { TranslateService } from '@ngx-translate/core';
import { EXPERIENCE_ITEMS } from '../../core/data/portfolio.data';

function createMockTranslateService(): jasmine.SpyObj<TranslateService> {
  const spy = jasmine.createSpyObj('TranslateService', [
    'stream', 'instant', 'get', 'setDefaultLang', 'use', 'addLangs', 'getBrowserLang'
  ], {
    onLangChange: of({ lang: 'en' }),
    onTranslationChange: of({}),
    onDefaultLangChange: of({}),
    currentLang: 'en',
    defaultLang: 'en'
  });
  spy.stream.and.returnValue(of(''));
  spy.instant.and.returnValue('');
  spy.get.and.returnValue(of(''));
  return spy;
}

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {
    translateService = createMockTranslateService();

    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [
        { provide: TranslateService, useValue: translateService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all experience items', () => {
    const items = fixture.nativeElement.querySelectorAll('.tli');
    expect(items.length).toBe(4);
  });

  describe('getBulletIndexes', () => {
    it('should return empty array for length 0', () => {
      expect(component.getBulletIndexes(0)).toEqual([]);
    });

    it('should return [1] for length 1', () => {
      expect(component.getBulletIndexes(1)).toEqual([1]);
    });

    it('should return [1,2,3,4,5] for length 5', () => {
      expect(component.getBulletIndexes(5)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('allDescParagraphs signal', () => {
    beforeEach(() => {
      // Re-create component with controlled stream values
      TestBed.resetTestingModule();
      translateService = createMockTranslateService();
    });

    function initComponent(): void {
      TestBed.configureTestingModule({
        imports: [ExperienceComponent],
        providers: [
          { provide: TranslateService, useValue: translateService }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(ExperienceComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }

    it('should split description on \\n\\n into paragraphs and convert \\n to <br>', () => {
      translateService.stream.and.callFake((key: string) => {
        if (key === 'EXPERIENCE.EXP1_DESC') {
          return of('Intro paragraph.\n\nSecond paragraph\nwith line break.\n\nThird paragraph.');
        }
        return of('');
      });
      initComponent();

      const pars = fixture.nativeElement.querySelectorAll('[data-testid^="experience-0-desc-par-"]');
      expect(pars.length).toBe(3);
      expect(pars[0].innerHTML).toBe('Intro paragraph.');
      expect(pars[1].innerHTML).toBe('Second paragraph<br>with line break.');
      expect(pars[2].innerHTML).toBe('Third paragraph.');
    });

    it('should render single paragraph when description has no newlines', () => {
      translateService.stream.and.callFake((key: string) => {
        if (key === 'EXPERIENCE.EXP1_DESC') {
          return of('Single paragraph description.');
        }
        return of('');
      });
      initComponent();

      const pars = fixture.nativeElement.querySelectorAll('[data-testid^="experience-0-desc-par-"]');
      expect(pars.length).toBe(1);
      expect(pars[0].innerHTML).toBe('Single paragraph description.');
    });

    it('should render zero paragraphs for empty description', () => {
      translateService.stream.and.callFake((key: string) => {
        if (key === 'EXPERIENCE.EXP1_DESC') {
          return of('');
        }
        return of('');
      });
      initComponent();

      const pars = fixture.nativeElement.querySelectorAll('[data-testid^="experience-0-desc-par-"]');
      expect(pars.length).toBe(0);
    });
  });

  describe('data-testid attributes', () => {
    it('should have data-testid on each .tli wrapper', () => {
      EXPERIENCE_ITEMS.forEach((_, i) => {
        const wrapper = fixture.nativeElement.querySelector(`[data-testid="experience-${i}"]`);
        expect(wrapper).withContext(`experience-${i}`).toBeTruthy();
      });
    });

    it('should have data-testid on description paragraph elements for EXP1', () => {
      // Re-create component with a known EXP1_DESC value
      TestBed.resetTestingModule();
      translateService = createMockTranslateService();
      translateService.stream.and.callFake((key: string) => {
        if (key === 'EXPERIENCE.EXP1_DESC') {
          return of('Paragraph 1.\n\nParagraph 2.');
        }
        return of('');
      });
      TestBed.configureTestingModule({
        imports: [ExperienceComponent],
        providers: [{ provide: TranslateService, useValue: translateService }]
      }).compileComponents();

      fixture = TestBed.createComponent(ExperienceComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const pars = fixture.nativeElement.querySelectorAll('[data-testid="experience-0-desc-par-0"], [data-testid="experience-0-desc-par-1"]');
      expect(pars.length).toBe(2);
    });

    it('should have data-testid on bullet <li> elements for EXP1', () => {
      const bullets = fixture.nativeElement.querySelectorAll('[data-testid^="experience-0-bullet-"]');
      expect(bullets.length).toBe(EXPERIENCE_ITEMS[0].bullets.length);
    });
  });
});

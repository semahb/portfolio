import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['use']);

    TestBed.configureTestingModule({
      providers: [
        TranslationService,
        { provide: TranslateService, useValue: translateSpy }
      ]
    });

    service = TestBed.inject(TranslationService);
    translateService = TestBed.inject(
      TranslateService
    ) as jasmine.SpyObj<TranslateService>;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with default language when localStorage is empty', () => {
    localStorage.clear();
    const newService = new TranslationService(translateService);
    expect(newService.getCurrentLanguage()).toBe('en');
  });

  it('should initialize with saved language from localStorage', () => {
    localStorage.setItem('portfolio-lang', 'fr');
    const newService = new TranslationService(translateService);
    expect(newService.getCurrentLanguage()).toBe('fr');
  });

  it('should return default language if saved language is invalid', () => {
    localStorage.setItem('portfolio-lang', 'invalid');
    const newService = new TranslationService(translateService);
    expect(newService.getCurrentLanguage()).toBe('en');
  });

  it('should set language and save to localStorage', () => {
    service.setLanguage('fr');
    expect(service.getCurrentLanguage()).toBe('fr');
    expect(localStorage.getItem('portfolio-lang')).toBe('fr');
    expect(translateService.use).toHaveBeenCalledWith('fr');
  });

  it('should fallback to default language for invalid language', () => {
    service.setLanguage('invalid');
    expect(service.getCurrentLanguage()).toBe('en');
    expect(translateService.use).toHaveBeenCalledWith('en');
  });

  it('should return supported languages', () => {
    const supported = service.getSupportedLanguages();
    expect(supported).toContain('en');
    expect(supported).toContain('fr');
    expect(supported.length).toBe(2);
  });

  it('should use signal for currentLanguage', () => {
    expect(service.currentLanguage()).toBe('en');
    service.setLanguage('fr');
    expect(service.currentLanguage()).toBe('fr');
  });
});

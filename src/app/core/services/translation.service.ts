import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly storageKey = 'portfolio-lang';
  private readonly defaultLanguage = 'en';
  private readonly supportedLanguages = ['en', 'fr', 'ar'];

  currentLanguage = signal<string>(this.defaultLanguage);

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = this.getSavedLanguage();
    const languageToUse = savedLanguage || this.defaultLanguage;
    this.setLanguage(languageToUse);
  }

  private getSavedLanguage(): string | null {
    const saved = typeof window !== 'undefined'
      ? localStorage.getItem(this.storageKey)
      : null;
    return saved && this.supportedLanguages.includes(saved) ? saved : null;
  }

  setLanguage(language: string): void {
    if (!this.supportedLanguages.includes(language)) {
      language = this.defaultLanguage;
    }
    this.translate.use(language);
    this.currentLanguage.set(language);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.storageKey, language);
      this.applyDirectionality(language);
    }
  }

  private applyDirectionality(language: string): void {
    const html = document.documentElement;
    const isRtl = language === 'ar';
    html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    html.setAttribute('lang', language);
    html.classList.toggle('lang-ar', isRtl);
    if (isRtl) {
      this.loadArabicFont();
    } else {
      this.removeArabicFont();
    }
  }

  private loadArabicFont(): void {
    if (!document.getElementById('arabic-font')) {
      const link = document.createElement('link');
      link.id = 'arabic-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap';
      document.head.appendChild(link);
    }
  }

  private removeArabicFont(): void {
    document.getElementById('arabic-font')?.remove();
  }

  getCurrentLanguage(): string {
    return this.currentLanguage();
  }

  getSupportedLanguages(): string[] {
    return this.supportedLanguages;
  }
}

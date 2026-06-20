import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly storageKey = 'portfolio-lang';
  private readonly defaultLanguage = 'en';
  private readonly supportedLanguages = ['en', 'fr'];

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
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage();
  }

  getSupportedLanguages(): string[] {
    return this.supportedLanguages;
  }
}

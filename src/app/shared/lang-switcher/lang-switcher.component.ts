import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  template: `
    <div class="lang-switcher" data-testid="navbar-lang-switcher">
      <button
        [class.active]="isCurrentLang('en')"
        (click)="setLang('en')"
        data-testid="navbar-lang-en"
      >
        EN
      </button>
      <span>|</span>
      <button
        [class.active]="isCurrentLang('fr')"
        (click)="setLang('fr')"
        data-testid="navbar-lang-fr"
      >
        FR
      </button>
      <span>|</span>
      <button
        [class.active]="isCurrentLang('ar')"
        (click)="setLang('ar')"
        data-testid="navbar-lang-ar"
      >
        AR
      </button>
    </div>
  `,
  styles: `
    .lang-switcher {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      font-family: inherit;
      font-size: inherit;
      color: var(--text-secondary);
      transition: color 0.2s ease;

      &:hover {
        color: var(--text-primary);
      }

      &.active {
        color: var(--text-primary);
        font-weight: 600;
      }
    }

    span {
      color: var(--text-tertiary);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LangSwitcherComponent {
  constructor(private translationService: TranslationService) {}

  isCurrentLang(lang: string): boolean {
    return this.translationService.getCurrentLanguage() === lang;
  }

  setLang(lang: string): void {
    this.translationService.setLanguage(lang);
  }
}

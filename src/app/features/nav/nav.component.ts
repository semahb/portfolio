import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { LangSwitcherComponent } from '../../shared/lang-switcher/lang-switcher.component';
import { FOOTER_DATA } from '../../core/data/portfolio.data';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, TranslatePipe, LangSwitcherComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  navLinks: NavLink[] = [
    { label: 'NAV.SERVICES', href: '#what' },
    { label: 'NAV.PROCESS', href: '#process' },
    { label: 'NAV.PROJECTS', href: '#projects' },
    { label: 'NAV.SKILLS', href: '#skills' },
    { label: 'NAV.EXPERIENCE', href: '#experience' },
    { label: 'NAV.CONTACT', href: '#contact' }
  ];

  hireEmailHref = FOOTER_DATA.emailHref;
  isMobileMenuOpen = false;

  toggleTheme(): void {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('bs-theme', newTheme);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  getTestId(label: string): string {
    return 'nav-link-' + label.toLowerCase().replace(/\s+/g, '-');
  }

  stripHash(href: string): string {
    return href.replace('#', '');
  }
}

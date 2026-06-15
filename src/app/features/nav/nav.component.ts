import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_LINKS, FOOTER_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  navLinks = NAV_LINKS;
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
}

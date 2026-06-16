import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FOOTER_DATA, FooterData } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="ftl" data-testid="footer-logo">{{ footer.logoText }}<span>.</span></div>
      <div class="ftr">
        © {{ footer.year }} {{ footer.name }} ·
        <a [href]="footer.emailHref" data-testid="footer-email">{{ footer.email }}</a> ·
        {{ footer.tagline }}
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  footer: FooterData = FOOTER_DATA;
}

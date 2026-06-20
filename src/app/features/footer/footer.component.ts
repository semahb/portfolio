import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { FOOTER_DATA, FooterData } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <footer>
      <div class="ftl" data-testid="footer-logo">Bader<span>.</span></div>
      <div class="ftr">
        © {{ footer.year }} {{ ('FOOTER.NAME') | translate }} ·
        <a [href]="footer.emailHref" data-testid="footer-email">{{ ('FOOTER.EMAIL') | translate }}</a> ·
        {{ ('FOOTER.TAGLINE') | translate }}
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  footer: FooterData = FOOTER_DATA;
}

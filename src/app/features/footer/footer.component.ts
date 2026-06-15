import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="ftl" data-testid="footer-logo">Bader<span>.</span></div>
      <div class="ftr">
        © 2025 Bader Semah ·
        <a href="mailto:bader.semah1@gmail.com" data-testid="footer-email">bader.semah1&#64;gmail.com</a> ·
        Available for freelance worldwide
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}

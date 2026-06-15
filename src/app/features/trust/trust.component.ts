import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRUST_CHIPS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrustComponent {
  trustChips = TRUST_CHIPS;
}

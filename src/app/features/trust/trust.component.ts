import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TRUST_CHIPS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './trust.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrustComponent {
  trustChips = TRUST_CHIPS;

  getChipKey(index: number): string {
    return 'TRUST.CHIP_' + index;
  }
}

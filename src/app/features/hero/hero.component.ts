import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface KPIItem {
  id: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  readonly kpiItems: KPIItem[] = [
    { id: 'YEARS' },
    { id: 'INDUSTRIES' },
    { id: 'LANGUAGES' },
    { id: 'SCALABILITY' }
  ];

  readonly yearsExp = HeroComponent.calcYearsExp();

  private static calcYearsExp(): number {
    const now = new Date();
    const totalMonths = (now.getUTCFullYear() - 2022) * 12 + (now.getUTCMonth() - 4);
    return Math.floor(totalMonths / 12);
  }
}

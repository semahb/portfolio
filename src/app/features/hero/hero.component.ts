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
  kpiItems: KPIItem[] = [
    { id: 'YEARS' },
    { id: 'INDUSTRIES' },
    { id: 'LANGUAGES' },
    { id: 'SCALABILITY' }
  ];
}

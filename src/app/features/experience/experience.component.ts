import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { EXPERIENCE_ITEMS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  experienceItems = EXPERIENCE_ITEMS;

  getExperienceKeyPrefix(index: number): string {
    return `EXPERIENCE.EXP${index + 1}`;
  }
}

import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
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
  private readonly translate = inject(TranslateService);

  getExperienceKeyPrefix(index: number): string {
    return `EXPERIENCE.EXP${index + 1}`;
  }

  getWorkTypeKey(workType: string): string {
    return `EXPERIENCE.WORKTYPE_${workType.toUpperCase()}`;
  }

  getBulletIndexes(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }

  getDescParagraphs(index: number): string[] {
    const key = `${this.getExperienceKeyPrefix(index)}_DESC`;
    const desc = this.translate.instant(key);
    return desc.split('\n\n').map((p: string) => p.replace(/\n/g, '<br>'));
  }
}

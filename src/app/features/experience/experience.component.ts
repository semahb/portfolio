import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { combineLatest, map } from 'rxjs';
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

  readonly allDescParagraphs = toSignal(
    combineLatest(
      EXPERIENCE_ITEMS.map((_, i) =>
        this.translate.stream(`EXPERIENCE.EXP${i + 1}_DESC`)
      )
    ).pipe(
      map(descriptions =>
        descriptions.map(desc => {
          if (!desc) return [];
          return (desc as string).split('\n\n').map((p: string) => p.replace(/\n/g, '<br>'));
        })
      )
    ),
    { initialValue: [] }
  );

  getExperienceKeyPrefix(index: number): string {
    return `EXPERIENCE.EXP${index + 1}`;
  }

  getWorkTypeKey(workType: string): string {
    return `EXPERIENCE.WORKTYPE_${workType.toUpperCase()}`;
  }

  getBulletIndexes(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }
}

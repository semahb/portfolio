import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_GROUPS, PROFICIENCY_ITEMS, LANGUAGE_CARDS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skillGroups = SKILL_GROUPS;
  proficiencies = PROFICIENCY_ITEMS;
  languages = LANGUAGE_CARDS;
}

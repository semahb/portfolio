import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { SKILL_GROUPS, PROFICIENCY_ITEMS, LANGUAGE_CARDS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skillGroups = SKILL_GROUPS;
  proficiencies = PROFICIENCY_ITEMS;
  languages = LANGUAGE_CARDS;

  getProficiencyKey(name: string): string {
    const keys: Record<string, string> = {
      'Backend (Java / Spring)': 'SKILLS.BACKEND',
      'Microservices & Architecture': 'SKILLS.MICROSERVICES',
      'Frontend (Angular / TS)': 'SKILLS.FRONTEND',
      'Security (Keycloak / JWT)': 'SKILLS.SECURITY',
      'DevOps & CI/CD': 'SKILLS.DEVOPS',
      'Database Design': 'SKILLS.DATABASE'
    };
    return keys[name] || name;
  }

  getSkillGroupKey(name: string): string {
    return 'SKILLS.SKILL_' + name.toUpperCase().replace(/\s+/g, '_');
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = PROJECTS;
  activeFilter = 'all';
  expandedIndex: number | null = null;

  filterProjects(filter: string): void {
    this.activeFilter = filter;
    this.expandedIndex = null;
  }

  toggleProjectDetail(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  isProjectVisible(project: any): boolean {
    if (this.activeFilter === 'all') return true;
    return project.filterTags.includes(this.activeFilter);
  }
}

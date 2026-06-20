import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { PROJECTS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = PROJECTS;
  activeFilter = 'all';
  expandedIndex: number | null = null;
  filters = ['all', 'fullstack', 'backend', 'realtime'];

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

  getProjectKey(project: any): string {
    const num = parseInt(project.number, 10);
    return 'PROJECTS.PROJECT' + num + '_';
  }

  getFilterLabel(filter: string): string {
    const filterLabels: Record<string, string> = {
      all: 'PROJECTS.FILTER_ALL',
      fullstack: 'PROJECTS.FILTER_FULLSTACK',
      backend: 'PROJECTS.FILTER_BACKEND',
      realtime: 'PROJECTS.FILTER_REALTIME'
    };
    return filterLabels[filter] || filter;
  }
}

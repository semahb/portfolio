import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter projects', () => {
    component.filterProjects('backend');
    fixture.detectChanges();
    expect(component.activeFilter).toBe('backend');
  });

  it('should toggle project detail', () => {
    component.toggleProjectDetail(0);
    expect(component.expandedIndex).toBe(0);
    component.toggleProjectDetail(0);
    expect(component.expandedIndex).toBeNull();
  });
});

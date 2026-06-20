import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../features/nav/nav.component';
import { HeroComponent } from '../features/hero/hero.component';
import { TrustComponent } from '../features/trust/trust.component';
import { ServicesComponent } from '../features/services/services.component';
import { ProcessComponent } from '../features/process/process.component';
import { ProjectsComponent } from '../features/projects/projects.component';
import { SkillsComponent } from '../features/skills/skills.component';
import { ExperienceComponent } from '../features/experience/experience.component';
import { ContactComponent } from '../features/contact/contact.component';
import { FooterComponent } from '../features/footer/footer.component';
import { CursorComponent } from '../shared/cursor/cursor.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    HeroComponent,
    TrustComponent,
    ServicesComponent,
    ProcessComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    CursorComponent
  ],
  template: `
    <app-cursor></app-cursor>
    <app-nav></app-nav>
    <app-hero></app-hero>
    <app-trust></app-trust>
    <app-services></app-services>
    <app-process></app-process>
    <app-projects></app-projects>
    <app-skills></app-skills>
    <app-experience></app-experience>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initializeRevealObserver();
    this.initializeNavActiveLink();
  }

  private initializeRevealObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('on');
          entry.target.querySelectorAll('.pbar').forEach((bar: any) => {
            bar.style.width = bar.dataset.w + '%';
          });
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.r,.tli').forEach((el) => observer.observe(el));
  }

  private initializeNavActiveLink(): void {
    const secs = document.querySelectorAll('section[id]');
    const nas = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let cur = '';
      secs.forEach((s: any) => {
        if (s.getBoundingClientRect().top <= 130) cur = s.id;
      });
      nas.forEach((a: any) => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
      });
    }, { passive: true });
  }
}

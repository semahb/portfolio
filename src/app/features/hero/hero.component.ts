import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { interval, Subscription } from 'rxjs';

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
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroSection', { read: ElementRef }) heroSection!: ElementRef<HTMLElement>;

  readonly kpiItems: KPIItem[] = [
    { id: 'YEARS' },
    { id: 'INDUSTRIES' },
    { id: 'LANGUAGES' },
    { id: 'SCALABILITY' }
  ];

  yearsCounter = 0;
  private readonly startDate = new Date('2022-05-01');
  private subscription: Subscription | null = null;
  private observer: IntersectionObserver | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.yearsCounter = this.calculateYears();
    this.cdr.markForCheck();

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.startCounter();
      } else {
        this.stopCounter();
      }
    }, { threshold: 0.3 });
    this.observer.observe(this.heroSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.stopCounter();
    this.observer?.disconnect();
  }

  private calculateYears(): number {
    const msElapsed = Date.now() - this.startDate.getTime();
    return msElapsed / (365.25 * 24 * 60 * 60 * 1000);
  }

  private startCounter(): void {
    if (this.subscription) return;
    this.subscription = interval(1000).subscribe(() => {
      this.yearsCounter = this.calculateYears();
      this.cdr.markForCheck();
    });
  }

  private stopCounter(): void {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}

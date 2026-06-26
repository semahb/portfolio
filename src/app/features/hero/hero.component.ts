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

  elapsedTime = '';
  private readonly startDate = Date.UTC(2022, 4, 1);
  private subscription: Subscription | null = null;
  private observer: IntersectionObserver | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.elapsedTime = this.getElapsedTime();
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

  private getElapsedTime(): string {
    const now = new Date();
    let years = now.getUTCFullYear() - 2022;
    let months = now.getUTCMonth() - 4; // May = 4 (0-indexed)
    let days = now.getUTCDate() - 1;    // May 1 = day 1
    let hours = now.getUTCHours();
    let minutes = now.getUTCMinutes();
    let seconds = now.getUTCSeconds();

    if (seconds < 0) { seconds += 60; minutes--; }
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) {
      const prevMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 0));
      days += prevMonth.getUTCDate();
      months--;
    }
    if (months < 0) { months += 12; years--; }

    return `${String(years).padStart(2, '0')}-${String(months).padStart(2, '0')}-${String(days).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  private startCounter(): void {
    if (this.subscription) return;
    this.subscription = interval(1000).subscribe(() => {
      this.elapsedTime = this.getElapsedTime();
      this.cdr.markForCheck();
    });
  }

  private stopCounter(): void {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}

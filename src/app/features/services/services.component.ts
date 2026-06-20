import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { SERVICE_CARDS } from '../../core/data/portfolio.data';

interface ServiceCard {
  id: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  serviceCards: ServiceCard[] = [
    { id: 'mvp', icon: '🚀' },
    { id: 'team', icon: '🤝' },
    { id: 'project', icon: '🏗️' }
  ];

  getServiceTags(serviceNumber: number): number[] {
    return [1, 2, 3, 4];
  }
}

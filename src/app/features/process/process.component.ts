import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface ProcessStep {
  id: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessComponent {
  processSteps: ProcessStep[] = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ];
}

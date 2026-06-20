import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CONTACT_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  contactLinks = CONTACT_LINKS;
  contactForm: FormGroup;
  submitButtonKey = signal('CONTACT.BUTTON_SEND');
  isSubmitted = signal(false);

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      project: [''],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitButtonKey.set('CONTACT.BUTTON_SENT');
      this.isSubmitted.set(true);

      setTimeout(() => {
        this.submitButtonKey.set('CONTACT.BUTTON_SEND');
        this.isSubmitted.set(false);
        this.contactForm.reset();
      }, 4000);
    }
  }

  getContactLinkKey(index: number): string {
    const keys = ['EMAIL', 'LINKEDIN', 'PHONE'];
    return `CONTACT.${keys[index]}_`;
  }
}

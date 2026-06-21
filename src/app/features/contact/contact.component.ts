import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  isSending = signal(false);
  hasError = signal(false);

  private http = inject(HttpClient);

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
      this.isSending.set(true);
      this.hasError.set(false);
      this.submitButtonKey.set('CONTACT.BUTTON_SENDING');
      this.contactForm.disable();

      const { name, email, project, message } = this.contactForm.value;

      this.http.post('/api/contact', { name, email, project, message }).subscribe({
        next: () => {
          this.isSending.set(false);
          this.isSubmitted.set(true);
          this.submitButtonKey.set('CONTACT.BUTTON_SENT');
          setTimeout(() => {
            this.isSubmitted.set(false);
            this.submitButtonKey.set('CONTACT.BUTTON_SEND');
            this.contactForm.reset();
            this.contactForm.enable();
          }, 4000);
        },
        error: () => {
          this.isSending.set(false);
          this.hasError.set(true);
          this.submitButtonKey.set('CONTACT.BUTTON_ERROR');
          this.contactForm.enable();
          setTimeout(() => {
            this.hasError.set(false);
            this.submitButtonKey.set('CONTACT.BUTTON_SEND');
          }, 5000);
        }
      });
    }
  }

  getContactLinkKey(index: number): string {
    const keys = ['EMAIL', 'LINKEDIN', 'PHONE'];
    return `CONTACT.${keys[index]}_`;
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONTACT_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  contactLinks = CONTACT_LINKS;
  contactForm: FormGroup;
  submitButtonText = 'Send Message →';
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      project: [''],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitButtonText = '✓ Sent! I\'ll reply within 24h';
      this.isSubmitted = true;

      setTimeout(() => {
        this.submitButtonText = 'Send Message →';
        this.isSubmitted = false;
        this.contactForm.reset();
      }, 4000);
    }
  }
}

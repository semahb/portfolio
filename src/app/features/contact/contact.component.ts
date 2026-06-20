import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CONTACT_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit, OnDestroy {
  contactLinks = CONTACT_LINKS;
  contactForm: FormGroup;
  submitButtonText = signal('');
  isSubmitted = signal(false);
  private langSubscription: Subscription | null = null;

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      project: [''],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.updateSubmitButtonText();
    this.langSubscription = this.translate.onLangChange.subscribe(() => {
      if (!this.isSubmitted()) {
        this.updateSubmitButtonText();
      }
    });
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  private updateSubmitButtonText(): void {
    this.submitButtonText.set(this.translate.instant('CONTACT.FORM_SUBMIT'));
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitButtonText.set(this.translate.instant('CONTACT.FORM_SUBMIT_SENT'));
      this.isSubmitted.set(true);

      setTimeout(() => {
        this.updateSubmitButtonText();
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

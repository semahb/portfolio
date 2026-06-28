import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ContactComponent } from './contact.component';
import { provideTranslateService } from '@ngx-translate/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        provideHttpClient(),
        provideTranslateService()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all contact links', () => {
    const links = fixture.nativeElement.querySelectorAll('.cm');
    expect(links.length).toBe(3);
  });

  it('should have contact form with required fields', () => {
    expect(component.contactForm.get('name')).toBeTruthy();
    expect(component.contactForm.get('email')).toBeTruthy();
  });

  it('should disable form while sending', () => {
    component.contactForm.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message'
    });
    component.onSubmit();
    expect(component.contactForm.disabled).toBeTrue();
  });

  it('should show error state when hasError is true', () => {
    component.hasError.set(true);
    fixture.detectChanges();

    const errorEl = fixture.nativeElement.querySelector('.ferror');
    expect(errorEl).toBeTruthy();
  });
});

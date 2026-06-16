import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
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
});

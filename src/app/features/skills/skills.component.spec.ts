import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all skill groups', () => {
    const groups = fixture.nativeElement.querySelectorAll('.skg');
    expect(groups.length).toBe(4);
  });

  it('should display all proficiency items', () => {
    const items = fixture.nativeElement.querySelectorAll('.prof-list > div');
    expect(items.length).toBe(6);
  });

  it('should display all language cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.lcard');
    expect(cards.length).toBe(3);
  });
});

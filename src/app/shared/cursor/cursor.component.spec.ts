import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursorComponent } from './cursor.component';

describe('CursorComponent', () => {
  let component: CursorComponent;
  let fixture: ComponentFixture<CursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create cursor elements', () => {
    const dot = document.getElementById('cdot');
    const ring = document.getElementById('cring');
    expect(dot).toBeTruthy();
    expect(ring).toBeTruthy();
  });
});

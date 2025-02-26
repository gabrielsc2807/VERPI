import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerAluPage } from './ver-alu.page';

describe('VerAluPage', () => {
  let component: VerAluPage;
  let fixture: ComponentFixture<VerAluPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

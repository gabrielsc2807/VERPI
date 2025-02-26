import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AluCursinhoPage } from './alu-cursinho.page';

describe('AluCursinhoPage', () => {
  let component: AluCursinhoPage;
  let fixture: ComponentFixture<AluCursinhoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AluCursinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AluNotasPage } from './alu-notas.page';

describe('AluNotasPage', () => {
  let component: AluNotasPage;
  let fixture: ComponentFixture<AluNotasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AluNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

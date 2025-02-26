import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurGerenciarPage } from './cur-gerenciar.page';

describe('CurGerenciarPage', () => {
  let component: CurGerenciarPage;
  let fixture: ComponentFixture<CurGerenciarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CurGerenciarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirProduto } from './abrir-produto';

describe('AbrirProduto', () => {
  let component: AbrirProduto;
  let fixture: ComponentFixture<AbrirProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(AbrirProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaSub18Component } from './categoria-sub18.component';

describe('CategoriaSub18Component', () => {
  let component: CategoriaSub18Component;
  let fixture: ComponentFixture<CategoriaSub18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaSub18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaSub18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

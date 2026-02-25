import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaSub14Component } from './categoria-sub14.component';

describe('CategoriaSub14Component', () => {
  let component: CategoriaSub14Component;
  let fixture: ComponentFixture<CategoriaSub14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaSub14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaSub14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

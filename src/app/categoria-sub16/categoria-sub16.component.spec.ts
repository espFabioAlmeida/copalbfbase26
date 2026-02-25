import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaSub16Component } from './categoria-sub16.component';

describe('CategoriaSub16Component', () => {
  let component: CategoriaSub16Component;
  let fixture: ComponentFixture<CategoriaSub16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaSub16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaSub16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

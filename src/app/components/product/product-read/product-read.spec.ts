import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRead } from './product-read';

describe('ProductRead', () => {
  let component: ProductRead;
  let fixture: ComponentFixture<ProductRead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductRead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

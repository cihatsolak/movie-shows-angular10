import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOrderListComponent } from './orders-order-list.component';

describe('OrdersOrderListComponent', () => {
  let component: OrdersOrderListComponent;
  let fixture: ComponentFixture<OrdersOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

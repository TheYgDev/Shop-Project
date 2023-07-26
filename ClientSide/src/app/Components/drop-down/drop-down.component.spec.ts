import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownchComponent } from './drop-down.component';

describe('DropDownchComponent', () => {
  let component: DropDownchComponent;
  let fixture: ComponentFixture<DropDownchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownchComponent]
    });
    fixture = TestBed.createComponent(DropDownchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

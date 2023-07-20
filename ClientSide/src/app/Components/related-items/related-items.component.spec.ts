import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedItemsComponent } from './related-items.component';

describe('RelatedItemsComponent', () => {
  let component: RelatedItemsComponent;
  let fixture: ComponentFixture<RelatedItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedItemsComponent]
    });
    fixture = TestBed.createComponent(RelatedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

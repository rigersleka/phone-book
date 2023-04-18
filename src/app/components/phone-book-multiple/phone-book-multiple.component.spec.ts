import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookMultipleComponent } from './phone-book-multiple.component';

describe('PhoneBookMultipleComponent', () => {
  let component: PhoneBookMultipleComponent;
  let fixture: ComponentFixture<PhoneBookMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBookMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneBookMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookTemplateComponent } from './phone-book-template.component';

describe('PhoneBookTemplateComponent', () => {
  let component: PhoneBookTemplateComponent;
  let fixture: ComponentFixture<PhoneBookTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBookTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneBookTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ui5formComponent } from './ui5form.component';

describe('Ui5formComponent', () => {
  let component: Ui5formComponent;
  let fixture: ComponentFixture<Ui5formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ui5formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ui5formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

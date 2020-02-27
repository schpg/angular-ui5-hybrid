import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ui5listenerComponent } from './ui5listener.component';

describe('Ui5listenerComponent', () => {
  let component: Ui5listenerComponent;
  let fixture: ComponentFixture<Ui5listenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ui5listenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ui5listenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

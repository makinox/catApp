import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazasPageComponent } from './razas-page.component';

describe('RazasPageComponent', () => {
  let component: RazasPageComponent;
  let fixture: ComponentFixture<RazasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

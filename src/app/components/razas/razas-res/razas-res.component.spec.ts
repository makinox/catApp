import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazasResComponent } from './razas-res.component';

describe('RazasResComponent', () => {
  let component: RazasResComponent;
  let fixture: ComponentFixture<RazasResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazasResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazasResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

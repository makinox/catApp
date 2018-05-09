import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazasHonorComponent } from './razas-honor.component';

describe('RazasHonorComponent', () => {
  let component: RazasHonorComponent;
  let fixture: ComponentFixture<RazasHonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazasHonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazasHonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

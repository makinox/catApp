import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffResComponent } from './stuff-res.component';

describe('StuffResComponent', () => {
  let component: StuffResComponent;
  let fixture: ComponentFixture<StuffResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

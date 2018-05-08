import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesResComponent } from './types-res.component';

describe('TypesResComponent', () => {
  let component: TypesResComponent;
  let fixture: ComponentFixture<TypesResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

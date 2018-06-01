import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffPageComponent } from './stuff-page.component';

describe('StuffPageComponent', () => {
  let component: StuffPageComponent;
  let fixture: ComponentFixture<StuffPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

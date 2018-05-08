import { TestBed, inject } from '@angular/core/testing';

import { GatosService } from './gatos.service';

describe('GatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GatosService]
    });
  });

  it('should be created', inject([GatosService], (service: GatosService) => {
    expect(service).toBeTruthy();
  }));
});

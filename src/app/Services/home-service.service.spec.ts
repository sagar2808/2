import { TestBed } from '@angular/core/testing';

import { HomeServiceService } from './home-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

describe('HomeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers:[HttpClient]
  }).compileComponents());

  it('should be created', () => {
    const service: HomeServiceService = TestBed.get(HomeServiceService);
    expect(service).toBeTruthy();
  });
});

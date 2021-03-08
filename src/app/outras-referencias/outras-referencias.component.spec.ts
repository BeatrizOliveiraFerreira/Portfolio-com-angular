import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrasReferenciasComponent } from './outras-referencias.component';

describe('OutrasReferenciasComponent', () => {
  let component: OutrasReferenciasComponent;
  let fixture: ComponentFixture<OutrasReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutrasReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutrasReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

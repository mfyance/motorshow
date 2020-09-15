import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpositionAdminComponent } from './exposition-admin.component';

describe('ExpositionAdminComponent', () => {
  let component: ExpositionAdminComponent;
  let fixture: ComponentFixture<ExpositionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpositionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpositionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

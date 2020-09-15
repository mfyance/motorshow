import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStantComponent } from './upload-stant.component';

describe('UploadStantComponent', () => {
  let component: UploadStantComponent;
  let fixture: ComponentFixture<UploadStantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadStantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

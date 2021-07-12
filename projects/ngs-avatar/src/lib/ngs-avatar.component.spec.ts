import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsavatarComponent } from './ngs-avatar.component';

describe('NgsavatarComponent', () => {
  let component: NgsavatarComponent;
  let fixture: ComponentFixture<NgsavatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgsavatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsavatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsAvaterComponent } from './ngs-avater.component';

describe('NgsAvaterComponent', () => {
  let component: NgsAvaterComponent;
  let fixture: ComponentFixture<NgsAvaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgsAvaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsAvaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

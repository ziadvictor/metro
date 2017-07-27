import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationssComponent } from './stationss.component';

describe('StationssComponent', () => {
  let component: StationssComponent;
  let fixture: ComponentFixture<StationssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

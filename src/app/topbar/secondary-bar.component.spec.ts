import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryBarComponent } from './secondary-bar.component';

describe('SecondaryBarComponent', () => {
  let component: SecondaryBarComponent;
  let fixture: ComponentFixture<SecondaryBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

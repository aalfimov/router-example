import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PicturesDisplayComponent} from './pictures-display.component';

describe('PicturesDisplayComponent', () => {
  let component: PicturesDisplayComponent;
  let fixture: ComponentFixture<PicturesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PicturesDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

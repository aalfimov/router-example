import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PicturesGalleryComponent} from './pictures-gallery.component';

describe('PicturesGalleryComponent', () => {
  let component: PicturesGalleryComponent;
  let fixture: ComponentFixture<PicturesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PicturesGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

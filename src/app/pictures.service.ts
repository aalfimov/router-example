/* tslint:disable:max-line-length */
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  private lightBox = false;
  private picturesArray = [
    'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
    'https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1553700230-e7cb784ac50e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1564045204769-713451c56ec5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  ];

  constructor() {
  }
  changeLightBoxState(state: boolean) {
    this.lightBox = state;
  }
  getLightBoxState() {
    return this.lightBox;
  }
  getPictureArray() {
    return this.picturesArray;
  }
  getPictureByIndex(index: number) {
    return this.picturesArray[index];
  }
  add(value: string) {
    this.picturesArray.push(value);
  }
}

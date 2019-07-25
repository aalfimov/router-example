import { Component, OnInit } from '@angular/core';
import {PicturesService} from '../pictures.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './pictures-display.component.html',
  styleUrls: ['./pictures-display.component.scss']
})
export class PicturesDisplayComponent implements OnInit {
  constructor(private picturesService: PicturesService) {
  }

  ngOnInit() {
  }

}

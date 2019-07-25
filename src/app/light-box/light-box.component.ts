import { Component, OnInit } from '@angular/core';
import {PicturesService} from '../pictures.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {

  image: string;

  constructor(private picturesService: PicturesService,
              private route: ActivatedRoute) { }

 // ngOnInit() {}
  ngOnInit(){
    this.image = this.route.snapshot.params['url'];
  }
}

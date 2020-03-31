import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header: {
      title: 'Location name',
      strapline: ''
    },
    sidebar: 'is on Wifinder because it has accessible wifi and space to site down with your laptop and get some work done.\n\nIf you\'ve been here, please leave a review, thanks!'
  };
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-img',
  templateUrl: './google-img.component.html',
  styleUrls: ['./google-img.component.css']
})
export class GoogleImgComponent implements OnInit {
  @Input() Data:string=''
  constructor() { }

  ngOnInit(): void {
  }

}

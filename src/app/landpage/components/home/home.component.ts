import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  faInfo = faInfoCircle;

  public slides = [
    {
      src: "https://picsum.photos/id/700/900/500"
    },
    {
      src: "https://picsum.photos/id/533/900/500"
    },
    {
      src: "https://picsum.photos/id/807/900/500"
    },
    {
      src: "https://picsum.photos/id/124/900/500"
    }
];

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {




  
   //ng image slider
   imageObject = [
    {
      image: 'assets/img1.png',
      thumbImage: 'assets/img1.png',
      title: ' Dino, Age 7',
    },
    {
      image: 'assets/img2.png',
      thumbImage: 'assets/img2.png',
      title: ' Rufus, Age 6',
    },
    {
      image: 'assets/img3.png',
      thumbImage: 'assets/img3.png',
      title: ' Lary, Age 10',
    },
    {
      image: 'assets/img4.png',
      thumbImage: 'assets/img4.png',
      title: ' Rex, Age 3',
    },
    {
      image: 'assets/img5.png',
      thumbImage: 'assets/img5.png',
      title: ' Pinky, Age 5',
    },
    {
      image: 'assets/img6.png',
      thumbImage: 'assets/img6.png',
      title: ' Blue, Age 12',
    },
    {
      image: 'assets/img7.png',
      thumbImage: 'assets/img7.png',
      title: ' Mike, Age 3',
    },
    {
      image: 'assets/img8.png',
      thumbImage: 'assets/img8.png',
      title: ' Harry, Age 4',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

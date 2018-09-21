import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../common/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(
    private aboutService: AboutService
  ) { }

  name: string;
  title: string;

  ngOnInit() {
    this.aboutService.getAbout().subscribe((about) => {
      this.name = about.name;
      this.title = about.title;
    });
  }
}

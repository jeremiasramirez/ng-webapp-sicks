import { Component, OnInit } from '@angular/core';
import { ServiceApp } from '../../services/service.app'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
    providers: [ServiceApp]
})
export class AboutComponent   {

  constructor(public service_:ServiceApp) { }

  ngOnInit() {
    this.service_.changeTextNamePage('About')
  }

}

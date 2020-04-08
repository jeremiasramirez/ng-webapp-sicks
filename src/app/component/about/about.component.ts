import { Component, OnInit } from '@angular/core';
import { ServiceApp } from '../../services/service.app'
import { timer } from "rxjs";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
    providers: [ServiceApp]
})
export class AboutComponent   {

  constructor(public service_:ServiceApp) { }
  public spinner ={
    off:true
  }
  ngOnInit() {
    timer(400).subscribe(timing=>this.spinner.off=false)
    this.service_.changeTextNamePage('About')
  }

}

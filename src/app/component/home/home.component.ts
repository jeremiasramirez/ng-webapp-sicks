import { Component } from '@angular/core';
import { ServiceApp } from '../../services/service.app'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../app.component.css'],
  providers: [ServiceApp]
})
export class HomeComponent  {

  constructor(public service_:ServiceApp) {


  }

  ngOnInit(){
    this.service_.changeTextNamePage('Home')
    this.service_.showSideNav()
  }




}

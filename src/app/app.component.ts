import { Component } from '@angular/core';
import { ServiceApp } from './services/service.app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceApp]
})
export class AppComponent {

  constructor(public service_:ServiceApp){

  }
  ngOnInit(): void {
    this.service_.deleteSideNav()

  }


}

import { Component } from '@angular/core';
import { ServiceApp } from '../../services/service.app'
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-virus',
  templateUrl: './virus.component.html',
  styleUrls: ['./virus.component.css'],
  providers: [ServiceApp]
})
export class VirusComponent   {
 
  constructor(public serv:ServiceApp, public param:ActivatedRoute) {

  }

  ngOnInit(){
    this.serv.showSideNav()
  }

}

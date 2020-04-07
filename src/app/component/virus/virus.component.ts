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
  public listVirus : any[];
  constructor(public serv:ServiceApp, public param:ActivatedRoute) {
      this.setVirusToArray()
  }
  setVirusToArray(){

    this.serv.getVirusTitle().subscribe(data=>{
      this.listVirus = data;
    })

  }

  ngOnInit(){
    this.serv.showSideNav()
  }

}

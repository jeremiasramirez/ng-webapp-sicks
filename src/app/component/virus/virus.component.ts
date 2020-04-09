import { Component } from '@angular/core';
import { ServiceApp } from '../../services/service.app'
import { ActivatedRoute , Router} from "@angular/router";
@Component({
  selector: 'app-virus',
  templateUrl: './virus.component.html',
  styleUrls: ['./virus.component.css'],
  providers: [ServiceApp]
})
export class VirusComponent   {
  public listVirus : any[];
  constructor(public serv:ServiceApp, public router:Router, public param:ActivatedRoute) {
      // this.router.navigate(["virus", ""])
      this.serv.changeTextNamePage("Virus")
      this.setVirusToArray()

  }

  showSide(){

     this.serv.deleteSideNav();

  }
  setVirusToArray(){

    this.serv.getVirusTitle().subscribe(data=>{
      this.listVirus = data;
      console.log(this.listVirus);

    })

  }
  ngOnInit(){
    this.serv.showSideNav()
  }

}

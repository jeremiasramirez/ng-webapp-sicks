import { Component } from '@angular/core';
import { ServiceApp } from '../../services/service.app'
import { ActivatedRoute , Router} from "@angular/router";
import { timer , Subject} from "rxjs";
@Component({
  selector: 'app-virus',
  templateUrl: './virus.component.html',
  styleUrls: ['./virus.component.css'],
  providers: [ServiceApp]
})
export class VirusComponent   {

  public listVirus : any[];
  dataVirus = [];
  public obs = new Subject()

  constructor(public serv:ServiceApp, public router:Router, public param:ActivatedRoute) {
      timer(500).subscribe(timing=>this.router.navigate(["virus", ""]))
      this.serv.changeTextNamePage("Virus")
      this.setVirusToArray()

      this.param.params.subscribe(param => {

        if (param.id){
          this.getData(param.id)
        }

      })

      this.obs.subscribe((data:any)=>{
        this.dataVirus = [];
        this.dataVirus.unshift(data);
        console.log(data)
      })


  }
  getData(id:number){
    this.serv.onlyVirus(id).subscribe(data=>{

      for(let i=0;i <data.length; i++){
        if (data[i].id == id){

         this.obs.next(data[i])
        }
      }





    })
  }


  showSide(){

     this.serv.deleteSideNav();

  }
  okGo(id:number=0){

    if (id === 0) return
    else this.router.navigate(["virus", id]);

  }
  setVirusToArray(){

    this.serv.getVirusTitle().subscribe(data=>{
      this.listVirus = data;
      // console.log(this.listVirus);

    })

  }
  ngOnInit(){
    this.serv.showSideNav()
  }

}

import { Component } from '@angular/core';
import { ServiceApp } from '../../services/service.app'
import { ActivatedRoute , Router} from "@angular/router";
import { timer ,fromEvent , Subject} from "rxjs";
import { take} from "rxjs/operators";
import { data_interface } from "../interfaces/type.data";

@Component({
  selector: 'app-virus',
  templateUrl: './virus.component.html',
  styleUrls: ['./virus.component.css'],
  providers: [ServiceApp]
})
export class VirusComponent   {

  public listVirus : any[];

  public dataVirus = [];
  public spinner = {
    off:true,
    on:true
  }
  public sizeRoutes:any  = 0;

  public obs = new Subject()

  constructor(public serv:ServiceApp, public router:Router, public param:ActivatedRoute) {
     this.okSpinner()

     // this.router.navigate(["virus", ""])
      this.serv.changeTextNamePage("Virus")
      this.setVirusToArray()

      this.param.params.subscribe(param => {

        if (param.id){
          this.sizeRoutes = param.id
          this.getData(param.id)

        }



      })

      this.obs.subscribe((data:data_interface)=>{


        this.dataVirus = [];
        this.dataVirus.unshift(data);

      })


  }
  getData(id:number){
    this.serv.onlyVirus(id).subscribe(data=>{
      if (data){
        for(let i=0;i <data.length; i++){

          if (data[i].id == id){
           this.obs.next(data[i])
          }


        }
      }


    })
  }


  showSide(){

     this.serv.deleteSideNav();

  }
  okSpinner(){
    this.spinner.off=true

    timer(500).subscribe(timing=>{this.spinner.off=false; })
  }
  okGo(id:number=0){
    this.okSpinner()
    if (id == 0) return
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

  sliderRigth(){
    this.okSpinner();
    if (this.sizeRoutes < 9){
         (this.sizeRoutes++);
        this.router.navigate(["virus", this.sizeRoutes])
    }

  }
  sliderLeft(){
    this.okSpinner();
    if (this.sizeRoutes > 1){
    (this.sizeRoutes--);
        this.router.navigate(["virus", this.sizeRoutes])
    }
  }
  toLast(){
    this.okSpinner();
    this.router.navigate(["virus", 9])

  }
  toFirst(){
    this.okSpinner();
    this.router.navigate(["virus", 1])

  }

  scrollDown(){
    let iteratorScroll_ = 0;
        iteratorScroll_ += 20;
    window.scrollBy(0, iteratorScroll_);
  }
  scrollUp(){
    window.scrollBy(0, 0);
  }

}

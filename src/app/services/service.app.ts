import { Injectable } from "@angular/core"
import { timer } from "rxjs";
import { ajax } from 'rxjs/ajax'
import { pluck ,delay, find,take, map} from 'rxjs/operators'


@Injectable()

export class ServiceApp {

  public urlTitle : string = 'assets/api/lists.virus.json'
  public urlOnlyVirus : string = 'assets/api/data.json'

  constructor(){

    setInterval(()=>{
      this.checkSizze()
    },1000)



    }
    checkSizze(){
    let inter=  setInterval(()=>{
          if (window.innerWidth < 800){
            clearInterval(inter)

              if (document.getElementById("sidenav")){
                   document.getElementById("sidenav").style.display="none"

              }
              else{
                   this.showSideNav()
                   clearInterval(inter)
              }
          }
          else{
              this.showSideNav()
              clearInterval(inter)
          }

      },2000)

    }
  public changeTextNamePage(name:string){
    document.getElementById('idTheme').innerText=name
  }
  deleteSideNav(){


        timer(0).subscribe(timing=>{
          let x = document.getElementById("sidenav")
          if (x) x.style.display = "none"
        })




  }
  showSideNav(){

      timer(0).subscribe(timing=>{
        let x = document.getElementById("sidenav")
        if (x) x.style.display = "block"
      })



  }

  getVirusTitle(){

    return ajax.get(this.urlTitle).pipe(
      delay(400),
      pluck('response')
    )

  }
  onlyVirus(id:number){

    return  ajax.get(this.urlOnlyVirus).pipe(
      delay(400),
      pluck('response')
    )

  }





}

import { Injectable } from "@angular/core"
import { timer } from "rxjs";
import { ajax } from 'rxjs/ajax'
import { pluck ,delay} from 'rxjs/operators'


@Injectable()

export class ServiceApp {


  constructor(){
    console.log('service run..');
    this.getVirusTitle()
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

    return ajax.get('assets/data.json').pipe(
      delay(400),
      pluck('response')
    )

  }



}

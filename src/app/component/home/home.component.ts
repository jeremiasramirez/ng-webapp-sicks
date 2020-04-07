import { Component } from '@angular/core';
import { ServiceApp } from '../../services/service.app'
import { timer } from 'rxjs'
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../app.component.css'],
  providers: [ServiceApp]
})
export class HomeComponent  {
  public spinner = {
    off:true
  }
  constructor(public service_:ServiceApp, public router:Router) {
    timer(1000).subscribe(timing=>this.spinner.off=false)

  }

  onVirus(){

    timer(600).subscribe(timing=>{
      this.router.navigate(["virus"])
    })

  }
  ngOnInit(){
    this.service_.changeTextNamePage('Home')
    this.service_.showSideNav()
  }




}

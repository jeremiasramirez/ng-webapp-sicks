import { Component  } from '@angular/core';
import { ServiceApp } from '../../services/service.app'
import { data_credit } from "../interfaces/type.credit"


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css'],
  providers: [ServiceApp]
})
export class CreditComponent {

  public spinner = {
    off: false
  }
  public credits : any[];

  constructor(public serv:ServiceApp) {
    this.setCredit()
  }

  setCredit(){
    this.serv.getCredits().subscribe((resp)=>{
      this.credits =resp;

    }, (x)=> {}, ()=>{this.spinner.off=true});

  }



}

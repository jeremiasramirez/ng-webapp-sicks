import { Routes , RouterModule} from "@angular/router"
import { ModuleWithProviders } from "@angular/core"



// import { AppComponent } from './app.component';
import { VirusComponent } from './component/virus/virus.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { EmptyComponent } from './empty/empty.component';
import { CreditComponent } from './component/credit/credit.component';

const ROUTES : Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'virus', component: VirusComponent},
  {path: 'virus/:id', component: VirusComponent},
  {path: 'about', component: AboutComponent},
  {path: 'credit', component: CreditComponent},
  {path: '', component: EmptyComponent},
  {path: '**', component: EmptyComponent}

]

export const ROUTING:ModuleWithProviders = RouterModule.forRoot(ROUTES);

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { OperatorPanelComponent } from './view/operator-panel/operator-panel.component';
import { PaymentPanelComponent } from './view/payment-panel/payment-panel.component';
import { ConfigurationPanelComponent } from './view/configuration-panel/configuration-panel.component';
import { ServicesPanelComponent } from './view/services-panel/services-panel.component';
import { ConfigurationPanelApiComponent } from './view/configuration-panel-api/configuration-panel-api.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },   
  {path: 'home', component: HomeComponent},
  {path: 'operator-panel', component: OperatorPanelComponent},
  {path: 'payment-panel', component: PaymentPanelComponent},
  {path: 'configuration-panel', component: ConfigurationPanelComponent},
  {path: 'configuration-panel-api', component: ConfigurationPanelApiComponent},
  {path: 'services-panel', component: ServicesPanelComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

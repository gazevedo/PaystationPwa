import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperatorPanelComponent } from './view/operator-panel/operator-panel.component';
import { PaymentPanelComponent } from './view/payment-panel/payment-panel.component';
import { ConfigurationPanelComponent } from './view/configuration-panel/configuration-panel.component';
import { ServicesPanelComponent } from './view/services-panel/services-panel.component';
import { KeyboardComponent } from './utilities/keyboard/keyboard.component';
import { FormsModule }   from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader'; 
import {  SharedService  }  from  "src/app/utilities/SharedService";
import { ConfigurationPanelApiComponent } from './view/configuration-panel-api/configuration-panel-api.component'

const ngxUiLoaderConfig: NgxUiLoaderConfig = 
{
  bgsColor: "064ec0",
  bgsOpacity: 0.5,
  bgsPosition: "bottom-right",
  bgsSize: 60,
  bgsType: "ball-spin-clockwise",
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: "#064ec0",
  fgsPosition: "center-center",
  fgsSize: 100,
  fgsType: "ball-spin-clockwise",
  gap: 24,
  logoPosition: "center-center",
  logoSize: 120,
  logoUrl: "",
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(40, 40, 40, 0.8)",
  pbColor: "red",
  pbDirection: "ltr",
  pbThickness: 3,
  hasProgressBar: false,
  text: "",
  textColor: "#FFFFFF",
  textPosition: "center-center",
  maxTime: -1,
  minTime: 300
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OperatorPanelComponent,
    PaymentPanelComponent,
    ConfigurationPanelComponent,
    ServicesPanelComponent,
    KeyboardComponent,
    ConfigurationPanelApiComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FormsModule, 
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

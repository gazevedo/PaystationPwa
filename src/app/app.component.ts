import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
import { SharedService }  from  "src/app/utilities/SharedService" ; 
import { ConfigurationDal } from './dal/ConfigurationDal';
import { Log } from "src/app/utilities/Log";
import { Router } from '@angular/router';
import { SystemSession } from "src/app/utilities/SystemSession"; 
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PaystationPWA';   
  messageVisible: boolean = false; 
  lbmessage:string;

  constructor(private ngxService: NgxUiLoaderService, private  sharedService : SharedService, 
    private router: Router , private _location: Location) {
    if(SystemSession.Configuration == null){
      this.showMessage("Equipamento não configurado.")
      this.router.navigate(['/configuration-panel-api']) 
      .catch(console.error); 
    }
    else{
      this.router.navigate(['/home']) 
      .catch(console.error); 
    }
  }

  ngOnInit(): void {      
    this.sharedService.sharedLoadder.subscribe(message => this.showLoadder(message)) 
    this.sharedService.sharedMessage.subscribe(message => this.showMessage(message)) 
  }

  showLoadder(show:string){ 
    if(show == "true"){ 
      this.ngxService.start();
    }
    else{          
      this.ngxService.stop();
    } 
  }

  async showMessage(msg:string){ 
    console.log("aqui " + msg)
    if(msg == '' || msg == null)
      return;
    else{   
      this.lbmessage = msg; 
      this.messageVisible = true;  
      await this.delay(3000);
      new Promise( resolve => setTimeout(resolve, 3000)); 
      this.messageVisible = false;  
    } 
  }
  
  delay(ms: number) { 
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  clickCancel(){
    this._location.back();
  }
  
  clickConfirm(){
    
  }
}


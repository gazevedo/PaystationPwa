import { Component, OnInit } from '@angular/core';  
import  {  SharedService  }  from  "src/app/utilities/SharedService" ;
import { UserController } from 'src/app/controller/UserController'; 
import { ComponentController } from 'src/app/controller/ComponentController';

let imput: any; 

@Component({
  selector: 'app-operator-panel',
  templateUrl: './operator-panel.component.html',
  styleUrls: ['./operator-panel.component.css']
})
export class OperatorPanelComponent extends ComponentController implements OnInit {
  user: string;
  password: string;
  message:boolean;

  constructor(private sharedService: SharedService) { 
    super();
    this.showCommandButton(true);
    this.showCommandButtonConfirm(false);
    this.user = "";
    this.password = "";
  }       

  ngOnInit(): void { 
  }

  keyEventListner(value:string) {  
     if(value == "ENTER")  {
      this.loginOperator();
    }
    else if(imput == "user" && (value == "BACKSPACE" && this.user.length>0)){ 
        this.user = String(this.user).substr(0,this.user.length-1);
    }
    else if (imput == "user" && (value != "BACKSPACE" )){ 
      this.user = this.user + value;
    }  
    else if(value == "BACKSPACE" && this.password.length>0){ 
        this.password = String(this.password).substr(0,this.password.length-1);
    }
    else if (value != "BACKSPACE" ){ 
        this.password = this.password + value; 
    } 
  }

  focusFunction(val: string){
    imput = val;
  }

  async loginOperator(){ 
    this.showLoadder(true);
    let result = await UserController.UserOperatorLogin(this.user, this.password);  
    if(result.status == 200){

    }
    else
    { 
      this.showMessage(result.message);
    } 
    this.showLoadder(false);
  } 

  showLoadder(show:boolean){  
    show ? this.sharedService.showLoadder("true") : this.sharedService.showLoadder("false");
  }

  showMessage(msg:string){ 
    this.sharedService.nextMessage(msg)
  }
}

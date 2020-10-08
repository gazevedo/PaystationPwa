import { Component, OnInit } from '@angular/core';
import { ComponentController } from 'src/app/controller/ComponentController';

@Component({
  selector: 'app-configuration-panel-api',
  templateUrl: './configuration-panel-api.component.html',
  styleUrls: ['./configuration-panel-api.component.css']
})
export class ConfigurationPanelApiComponent extends ComponentController implements OnInit {
  BtnConfirm: HTMLElement;
  BtnCancel: HTMLElement;
  
  constructor() 
  { 
    super();
    this.showCommandButtonCancel(false);
    this.bindView();   
    this.setListeners();

  }

  private bindView(){
    this.BtnConfirm = document.getElementById('buttonConfirm');
    this.BtnCancel = document.getElementById('buttonCancel');
  }

  private setListeners(){
    this.BtnConfirm.addEventListener('click', this.clickConfirm);
  }

  ngOnInit(): void {
  }
 
  clickConfirm(){
    console.log("clicou aqui");

  }

}

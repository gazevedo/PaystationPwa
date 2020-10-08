import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentController } from 'src/app/controller/ComponentController';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 

})
export class HomeComponent extends ComponentController implements OnInit {

  constructor(private router: Router ) 
  { 
    super();
    this.showCommandButton(false);
  }

  ngOnInit(): void {
  }

  

  clickPayment() {
    this.router.navigate(['/payment-panel'])
      .then(success => console.log('navigation success?' , success))
      .catch(console.error); 
  }

  clickOperator() { 
    this.router.navigate(['/operator-panel'])
      .then(success => console.log('navigation success?' , success))
      .catch(console.error); 
  }

  clickServices() {
    this.router.navigate(['/services-panel'])
      .then(success => console.log('navigation success?' , success))
      .catch(console.error); 
  }
}

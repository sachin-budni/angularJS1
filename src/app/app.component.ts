import { CustomerModel } from './customer.modal';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'MeanStack Classes';

  imgpath:string="assets/images/1.jpg";

  arr:any=["java","J2EE","Angular"];

  customer:{}={
    name:'abc',address:'xyz',age:20
  }

  customer1:CustomerModel = new CustomerModel();

  constructor()
  {
    this.customer1.name="sachin";
    this.customer1.address="BTM";
    this.customer1.age=22;
    
  }

  getSubject():string{
    return this.title;
  }
}

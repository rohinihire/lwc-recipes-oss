import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    greeting = 'World';
    
    handleChange(event){
      this.greeting = event.target.value;   
    }
}

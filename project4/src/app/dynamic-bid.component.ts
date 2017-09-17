import {Component, ComponentRef, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver} from '@angular/core';
import { BidEquipmentComponent } from './bid-item/bid-equipment/bid-equipment.component';
import { BidLaborComponent } from './bid-item/bid-labor/bid-labor.component';
import { BidMaterialComponent } from './bid-item/bid-material/bid-material.component';



@Component({
  selector: 'dynamic-component',
  entryComponents: [BidLaborComponent, BidEquipmentComponent, BidMaterialComponent], // Reference to the components must be here in order to dynamically create them
  template: `
    <div #dynamicBidComponentContainer class="row"></div>
  `,
})
export class DynamicBidComponent {
  currentComponent;

  
  constructor(private resolver: ComponentFactoryResolver) { }
  
  @ViewChild('dynamicBidComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
  
  // component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }

    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs).map((inputName) => {return {provide: inputName, useValue: data.inputs[inputName]};});
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    
    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
    
    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);
    
    // We create the component using the factory and the injector
    let component = factory.create(injector);
    
    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);
    
    // We can destroy the old component is we like by calling destroy
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    
    this.currentComponent = component;
  }

  
  
}
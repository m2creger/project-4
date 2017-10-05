import {Component, ComponentRef, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver} from '@angular/core';
import { ProjectMaterialsComponent } from './projects/project-materials/project-materials.component';
import { ProjectLaborComponent } from './projects/project-labor/project-labor.component';
import { ProjectEquipmentComponent } from './projects/project-equipment/project-equipment.component';

@Component ({
	selector: 'dynamic-project-component',
	entryComponents: [ProjectEquipmentComponent, ProjectLaborComponent, ProjectMaterialsComponent],
	template: `
	<div #dynamicProjectComponentContainer class="row"></div>
	`
})

export class DynamicProjectComponent {
	currentComponent;

	constructor(private resolver: ComponentFactoryResolver) { }

	@ViewChild('dynamicProjectComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

	@Input() set ComponentData(data: {component: any, inputs: any}) {
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

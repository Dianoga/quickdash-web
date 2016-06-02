import { Component } from '@angular/core';

@Component({
	selector: 'my-widget-generic',
	template: require('./generic.component.html'),
	styles: [require('./generic.component.scss')]
})
export class GenericComponent {
	constructor() {
	}
}

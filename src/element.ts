import template from './template.html?raw';
import compiledCSS from './styles.less?inline';

class MyElement extends HTMLElement {
	
	static tagName = 'my-element';
	
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	
	connectedCallback() {
		// Avoid re-rendering if reconnected
		if (this.shadowRoot && this.shadowRoot.childNodes.length > 0) return;
		
		this.shadowRoot!.innerHTML = `
			<style>${compiledCSS}</style>
			${template}
		`;
	}
}

export {
	MyElement as default,
	MyElement,
};

import template from './template.html?raw';
import compiledCSS from './styles.less?inline';

const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(compiledCSS);

class MyElement extends HTMLElement {
	
	static tagName = 'my-element';
	
	constructor() {
		
		super();
		
		this.attachShadow({ mode: 'open' });
		
		// Adopt the skeleton CSS.
		this.shadowRoot!.adoptedStyleSheets.push(styleSheet);
		
		// Add the skeleton HTML.
		this.shadowRoot!.innerHTML = template;
	}
	
	connectedCallback() {
		// A lifecycle callback called each time the element is inserted into the DOM.
		
		// Avoid re-rendering if reconnected
		if (this.shadowRoot && this.shadowRoot.childNodes.length > 0) return;
	}
	
	disconnectedCallback() {
		// A lifecycle callback called each time the element is removed from the DOM.
		
	}
	
	connectedMoveCallback() {
		// A lifecycle callback called each time the element is moved to a different place in the DOM.
		// Note that a move is not a disconnect followed by a connect.
		
	}
}

export {
	MyElement as default,
	MyElement,
};

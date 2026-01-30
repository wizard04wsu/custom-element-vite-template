import template from "./template.html?raw";
import compiledCss from "./styles.less?inline";

export class MyElement extends HTMLElement {
  static tagName = "my-element";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Avoid re-rendering if reconnected
    if (this.shadowRoot && this.shadowRoot.childNodes.length > 0) return;

    this.shadowRoot!.innerHTML = `
      <style>${compiledCss}</style>
      ${template}
    `;
  }
}

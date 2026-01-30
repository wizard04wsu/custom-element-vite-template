import { MyElement } from "./element";

// Safe-define (handy during HMR/dev reloads)
if (!customElements.get(MyElement.tagName)) {
  customElements.define(MyElement.tagName, MyElement);
}

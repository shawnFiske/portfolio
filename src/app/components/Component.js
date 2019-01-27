import HtmlUtils from "../utils/HtmlElementUtils.js";
export default class Component extends HtmlUtils 
{
  
  constructor(cls, data) {
    super();
    this.data = data;
    this.cls = cls;
    this.name;
  }

  // Error is component does not contain a update method.
  update() {
    console.log("Error: Component does not contain a update method");
  }
}

export var __useDefault = true;